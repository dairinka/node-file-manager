// Copy file (should be done using Readable and Writable streams):
// cp path_to_file path_to_new_directory

import { createReadStream } from "node:fs";
import { createWriteStream } from 'node:fs';
import { access } from 'node:fs/promises';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';

const cp = async (pathToFile, pathToDestination) => {
  let emptyFile = true;
  try {
    await access(pathToFile);
  } catch {
    messageErrorOperationFailed({ message: `${pathToFile} not exist` });
    return;
  }

  try {
    await access(pathToDestination);
    throw Error('exist');
  } catch (err) {
    if (err.message === 'exist') {
      messageErrorOperationFailed({ message: `${pathToDestination} already exist` });
      return;
    }
  }
  const rs = createReadStream(pathToFile);
  const ws = createWriteStream(pathToDestination);
  rs.on('data', (chunk) => {
    ws.write(chunk + '\n', () => messageSuccessful('coppied') );
    emptyFile = false;
  })

  rs.on('error', (err) => {
    messageErrorOperationFailed(err);
    ws.close();
  })

  ws.on('error', (err) => messageErrorOperationFailed(err));
}
export { cp };