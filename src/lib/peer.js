import Peer from 'peerjs';
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


const createPeer = (id, ip, turnOnly, signalCredentials) => {
  const peer = new Peer(id, {
    ...peerjsConf,
    path: '/signal',
    config: {
      iceServers: [{
        urls: [`turn:${ip}`],
        username: signalCredentials.key,
        credential: signalCredentials.token,
      }, {
        urls: [`stun:${ip}`],
        username: signalCredentials.key,
        credential: signalCredentials.token,
      }],
      iceTransportPolicy: turnOnly?  "relay": "all"
    },
    ...signalCredentials,
    debug: 3
  });
  return peer
};

export {
  createPeer
}
