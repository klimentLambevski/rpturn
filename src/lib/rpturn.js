import {getUsernamePasswordFromCredentials} from "./utils";
import {createPeer} from "./peer";
import {getRpConfig} from "./config";
import {createApiGetRequest, getServerListApi, listNearbyInstances} from "./api";

const init = ({credentials, id, turnOnly = false, debug = 0, turnServer, isDev = false, isSeq = false, isGeoSearch = true}) => {
    const RPConfig = getRpConfig(isDev ? 'dev' : 'prod');
    let signalCredentials = getUsernamePasswordFromCredentials(credentials);
    let promise = null;
    if (isGeoSearch) {
        promise = getServerListGeo(signalCredentials, isDev)
    } else {
        promise = getServerList(signalCredentials, isDev)
            .then((ips) => isSeq ? checkServersLatencySeq(ips, isDev) : checkServersLatency(ips, isDev))
    }
    return promise
        .then((res) => {
            res = res && res.delay < 4000 ? res : [{ip: RPConfig.fallbackTurnServer}];
            return createPeer(id, turnServer ? {ip: turnServer} : res, turnOnly, signalCredentials, debug)
        })
};

const getIceServers = ({credentials, isDev}) => {
    const RPConfig = getRpConfig(isDev ? 'dev' : 'prod');
    let signalCredentials = getUsernamePasswordFromCredentials(credentials);
    return getServerList(signalCredentials, isDev)
        .then((ips) => checkServersLatency(ips))
        .then(res => {
            let {ip} = res && res.delay < 4000 ? res : [{ip: RPConfig.fallbackTurnServer}];
            return [{
                urls: [`turn:${ip}${isDev ? '' : ':5349'}`],
                username: signalCredentials.key,
                credential: signalCredentials.token,
            }, {
                urls: [`stun:${ip}${isDev ? '' : ':5349'}`],
                username: signalCredentials.key,
                credential: signalCredentials.token,
            }];
        })
};

const getServerList = (credentials, isDev) => {
    const RPConfig = getRpConfig(isDev ? 'dev' : 'prod');
    return getServerListApi(RPConfig.apiUrl, {
        key: credentials.key,
        token: credentials.token
    }).then(({data: {ips}}) => ips)
};

const getServerListGeo = (credentials, isDev) => {
    const RPConfig = getRpConfig(isDev ? 'dev' : 'prod');
    return createApiGetRequest(`https://global.rpturn.com/api/me`, {}, {json: true})
        .then((res) => {
            let ip = res.serverIp;
            return listNearbyInstances(RPConfig.apiUrl, ip, {
                key: credentials.key,
                token: credentials.token
            })
        })
        .then(({data: {res}}) => {
            if (res.instances.length) {
                return checkServersLatency(res.instances, isDev) //check double for more accuracy because on the first request the certificate and DNS lookup is donew
                    .then(() => checkServersLatency(res.instances, isDev))
                    .then((res) => {
                        return res
                    })
            } else {
                return {ip: res.domain}
            }
        });
};

const checkServersLatency = (ips, isDev) => {
    const RPConfig = getRpConfig(isDev ? 'dev' : 'prod');
    return Promise.all(ips.map(ip => {
        let start = window.performance.now();
        return createApiGetRequest(`https://${ip}${RPConfig.healthCheckEndpoint}`)
            .then(() => {
                let delay = window.performance.now() - start;
                return {
                    delay,
                    ip
                }
            })
            .catch((err) => {
                return {
                    delay: 2000,
                    ip
                }
            });
    }))
        .then(latencyList => {
            let min = Math.min(...latencyList.map(ll => ll.delay));
            return latencyList.find((ll) => ll.delay === min)
        })
};

const checkServersLatencySeq = (ips, isDev) => {
    return runSeqHealthCheck(ips, isDev, [])
        .then(latencyList => {
            let min = Math.min(...latencyList.map(ll => ll.delay));
            return latencyList.find((ll) => ll.delay === min)
        })
};

const invokeHealthCheck = (ip, endpoint) => {
    let start = window.performance.now();
    return createApiGetRequest(endpoint)
        .then(() => {
            let delay = window.performance.now() - start;
            return {
                delay,
                ip
            }
        })
        .catch(() => {
            return {
                delay: 2000,
                ip
            }
        });
};

const runSeqHealthCheck = (ips, isDev, results = []) => {
    const RPConfig = getRpConfig(isDev ? 'dev' : 'prod');
    let ip = ips.slice(0, 1);
    return invokeHealthCheck(ip, `https://${ip}${RPConfig.healthCheckEndpoint}`)
        .then((res) => {
            let restOfIps = ips.slice(1);
            if (restOfIps.length) {
                return runSeqHealthCheck(restOfIps, isDev, results)
                    .then(ress => [...ress, res])
            } else {
                return [...results, res]
            }
        })
        .catch(() => {
            let restOfIps = ips.slice(1);
            if (restOfIps.length) {
                return runSeqHealthCheck(restOfIps, isDev, results)
            } else {
                return results
            }
        })
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export default {
    init,
    getIceServers
}
