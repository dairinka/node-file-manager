// Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):
// mv path_to_file path_to_new_directory
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';
import { basename, join } from "node:path";
import { mkdir, opendir } from 'node:fs/promises';
import { createReadStream } from "node:fs";
import { createWriteStream } from 'node:fs';

import { rm as remove } from "node:fs/promises";
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';
import { access } from 'node:fs/promises';


const mv = async (pathToFile, pathToNewFolder) => {
  try {
    await opendir(pathToNewFolder);
    console.log(`${pathToNewFolder} exists`)
  } catch {

    try {
      await mkdir(pathToNewFolder, { recursive: true });
      console.log(`${pathToNewFolder} not exists. I create this for you`)
    } catch (err) {
      messageErrorOperationFailed(err);
      return;
    }

  }
  const pathToDestination = join(pathToNewFolder, basename(pathToFile));

  try {
    await access(pathToDestination);
    console.log(`I check ${pathToDestination}. It already exists`)
    throw Error('exist');
  } catch (err) {
    if (err.message === 'exist') {
      messageErrorOperationFailed({ message: `file ${pathToDestination} already exist` });
      return;
    }
    console.log(`I check ${pathToDestination}. It not exists. So go on`)
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