const RPConfig = {
  dev: {
    apiUrl: 'https://api-tool.rpturn.com',
    healthCheckEndpoint: '/api/health-check',
    fallbackTurnServer: 'turn.vitech.dev',
    signalServer: 'signal.rpturn.com'
  },
  prod: {
    apiUrl: 'https://live-api-tool.rpturn.com',
    healthCheckEndpoint: '/api/health-check',
    fallbackTurnServer: 'turn.rpturn.com',
    signalServer: 'live-signal.rpturn.com'
  }
};

const getRpConfig = (env = 'prod') => {
  return RPConfig[env]
}

export default RPConfig

export {
  getRpConfig
}
