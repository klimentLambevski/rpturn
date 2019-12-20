const EventEmitter = require('eventemitter3')

class BaseConnection extends EventEmitter {
  constructor(peer, provider, options) {
    super();
    this.peer = peer;
    this.provider = provider;
    this.options = options;
    this._open = false;
    this.metadata = options.metadata;
    this.config = options.config;
  }
  get open() {
    return this._open;
  }
}

export {BaseConnection}