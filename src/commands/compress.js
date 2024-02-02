// Compress file (using Brotli algorithm, should be done using Streams API)
// compress path_to_file path_to_destination
import { createReadStream } from 'node:fs';
import { createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { basename, join } from 'node:path';
import { access } from 'node:fs/promises';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';
import { pipeline } from 'node:stream/promises';
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';

const compress = async (pathToSourceFile, pathToDestination) => {
  try {
    await access(pathToSourceFile);
  } catch (err) {
    messageErrorOperationFailed(err);
    return;
  }
  const fileName =  basename(pathToSourceFile);
  const pathToArchiveFile = join(pathToDestination, `${fileName}.br`);

  try {
    await access(pathToArchiveFile);
    throw Error('exist');
  } catch (err) {
    if (err.message === 'exist') {
      messageErrorOperationFailed({message: "archive file already exist"});
      return;
    }
  }
   const rs = createReadStream(pathToSourceFile);
   const ws = createWriteStream(pathToArchiveFile);

   try {
    await pipeline(rs, createBrotliCompress(), ws);
    messageSuccessful('compressed');
   } catch(err) {
    messageErrorOperationFailed(err);
   }
}
export { compress };