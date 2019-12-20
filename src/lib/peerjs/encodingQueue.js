import { EventEmitter } from "eventemitter3";
import logger from "./logger";

export class EncodingQueue extends EventEmitter {
  fileReader = new FileReader();

  _queue = [];
  _processing = false;

  constructor() {
    super();

    this.fileReader.onload = (evt) => {
      this._processing = false;

      if (evt.target) {
        this.emit('done', evt.target.result);
      }

      this.doNextTask();
    };

    this.fileReader.onerror = (evt) => {
      logger.error(`EncodingQueue error:`, evt);
      this._processing = false;
      this.destroy();
      this.emit('error', evt);
    }
  }

  get queue() {
    return this._queue;
  }

  get size() {
    return this.queue.length;
  }

  get processing() {
    return this._processing;
  }

  enque(blob) {
    this.queue.push(blob);

    if (this.processing) return;

    this.doNextTask();
  }

  destroy() {
    this.fileReader.abort();
    this._queue = [];
  }

  doNextTask() {
    if (this.size === 0) return;
    if (this.processing) return;

    this._processing = true;

    this.fileReader.readAsArrayBuffer(this.queue.shift());
  }
}