import {getUsernamePasswordFromCredentials} from "./utils";
import {createPeer} from "./peer";
import RPConfig from "./config";
import {createApiGetRequest, getServerListApi} from "./api";

const init = ({credentials, id, turnOnly = false}) => {
  let signalCredentials = getUsernamePasswordFromCredentials(credentials);
  return getServerList(signalCredentials)
    .then((ips) => checkServersLatency(ips))
    .then((res) => {
      let ip = res && res.delay < 2000? res.ip: RPConfig.fallbackTurnServer;
      return createPeer(id, ip, turnOnly, signalCredentials)
    })
};

const getServerList = (credentials) => {
  return getServerListApi(RPConfig.apiUrl, {
    key: credentials.key,
    token: credentials.token
  }).then(({data: {ips}}) => ips)
};

const checkServersLatency = (ips) => {
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
      return latencyList.find(ll => ll.delay === min);
    })
};

export default {
  init
}
