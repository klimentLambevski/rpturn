import {getUsernamePasswordFromCredentials} from "./utils";
import {createPeer} from "./peer";
import {getRpConfig} from "./config";
import {createApiGetRequest, getServerListApi} from "./api";

const init = ({credentials, id, turnOnly = false, debug = 0, turnServer, isDev = false}) => {
    const RPConfig = getRpConfig(isDev ? 'dev' : 'prod');
    let signalCredentials = getUsernamePasswordFromCredentials(credentials);
    return getServerList(signalCredentials, isDev)
        .then((ips) => checkServersLatency(ips, isDev))
        .then((res) => {
            res = res && res.delay < 4000 ? res : [{ip: RPConfig.fallbackTurnServer}];
            return createPeer(id, turnServer ? {ip: turnServer} : res, turnOnly, signalCredentials, debug)
        })
};

const getIceServers = ({credentials, isDev}) => {
    const RPConfig = getRpConfig(isDev? 'dev': 'prod');
    let signalCredentials = getUsernamePasswordFromCredentials(credentials);
    return getServerList(signalCredentials, isDev)
        .then((ips) => checkServersLatency(ips))
        .then(res => {
            let {ip} = res && res.delay < 4000 ? res : [{ip: RPConfig.fallbackTurnServer}];
            return [{
                urls: [`turn:${ip}`],
                username: signalCredentials.key,
                credential: signalCredentials.token,
            }, {
                urls: [`stun:${ip}`],
                username: signalCredentials.key,
                credential: signalCredentials.token,
            }];
        })
};

const getServerList = (credentials, isDev) => {
    const RPConfig = getRpConfig(isDev? 'dev': 'prod');
    return getServerListApi(RPConfig.apiUrl, {
        key: credentials.key,
        token: credentials.token
    }).then(({data: {ips}}) => ips)
};

const checkServersLatency = (ips, isDev) => {
    const RPConfig = getRpConfig(isDev? 'dev': 'prod');
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
            .catch(() => {
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
