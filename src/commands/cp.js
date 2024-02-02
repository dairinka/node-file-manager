// Copy file (should be done using Readable and Writable streams):
// cp path_to_file path_to_new_directory

import { createReadStream } from "node:fs";
import { createWriteStream } from 'node:fs';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';
import { access } from 'node:fs/promises';
import { extname } from 'node:path';

const cp = async (pathToFile, pathToDestination) => {
  let emptyFile = true;
  try {
    await access(pathToFile);
  } catch {
    messageErrorOperationFailed({ message: `file ${pathToFile} not exist` });
    return;
  }
  if(!extname(pathToDestination)){
    messageErrorOperationFailed({message:"the file must have an extension"});
    return;
  }
  try {
    await access(pathToDestination);
    throw Error('exist');
  } catch (err) {
    if (err.message === 'exist') {
      messageErrorOperationFailed({ message: `file ${pathToDestination} already exist` });
      return;
    }
  }
  const rs = createReadStream(pathToFile);
  const ws = createWriteStream(pathToDestination);
  rs.on('data', (chunk) => {
    ws.write(chunk + '\n', () => console.log('\x1b[32mfile was successfully coppied \x1b[0m') );
    emptyFile = false;
  })

  rs.on('error', (err) => {
    messageErrorOperationFailed(err);
    ws.close();
  })

  ws.on('error', (err) => messageErrorOperationFailed(err));
}
export { cp };