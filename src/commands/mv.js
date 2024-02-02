// Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):
// mv path_to_file path_to_new_directory

import { basename, join } from "node:path";
import { createReadStream } from "node:fs";
import { createWriteStream } from 'node:fs';
import { access } from 'node:fs/promises';
import { rm as remove } from "node:fs/promises";
import { mkdir, opendir } from 'node:fs/promises';
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';



const mv = async (pathToFile, pathToNewFolder) => {
  try {
    await opendir(pathToNewFolder);
  } catch {

    try {
      await mkdir(pathToNewFolder, { recursive: true });
    } catch (err) {
      messageErrorOperationFailed(err);
      return;
    }

  }
  const pathToDestination = join(pathToNewFolder, basename(pathToFile));

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
  
  rs.on('error', (err) => {
    messageErrorOperationFailed(err);
    ws.close();
    return;
  })
  .pipe(ws)
  .on('error', (err) => {
    messageErrorOperationFailed(err);
  })
  .on("close", async () => {
    try {
      await remove(pathToFile);
      messageSuccessful('moved');
    } catch (err) { messageErrorOperationFailed(err) }
  })
}
export { mv };