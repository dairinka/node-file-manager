import { Worker } from 'worker_threads';

const createWorker = (fileWorker, arg = null) => {
  return new Promise((res, rej) => {
    const worker = new Worker(fileWorker);
    worker.postMessage(arg)
    worker.on('message', res);
    worker.on('error', rej);
  })
}

export { createWorker };
