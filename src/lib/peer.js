import {Peer} from './peerjs/peer';
import RPConfig from "./config";

let peerjsConf = {
  host: 'localhost',
  port: 4000
};

if(process.env.NODE_ENV === 'production') {
  peerjsConf = {
    host: RPConfig.signalServer,
    secure: true
  };
}


const createPeer = (id, {ip}, turnOnly, signalCredentials, debug) => {
  let iceServers = [{
    urls: [`turn:${ip}`],
    username: signalCredentials.key,
    credential: signalCredentials.token,
  }, {
    urls: [`stun:${ip}`],
    username: signalCredentials.key,
    credential: signalCredentials.token,
  }];

  console.log(iceServers, Peer);

  const peer = new Peer(id, {
    ...peerjsConf,
    path: '/signal',
    config: {
      iceServers: iceServers,
      iceTransportPolicy: turnOnly?  "relay": "all"
    },
    ...signalCredentials,
    debug
  });
  return peer
};

export {
  createPeer
}
