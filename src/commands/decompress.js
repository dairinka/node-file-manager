// Decompress file (using Brotli algorithm, should be done using Streams API)
// decompress path_to_file path_to_destination
import { createReadStream } from 'node:fs';
import { createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { basename, join } from 'node:path';
import { access } from 'node:fs/promises';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';
import { pipeline } from 'node:stream/promises';
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';

const decompress = async (pathToArchiveFile, pathToDestination) => {
  try {
    await access(pathToArchiveFile);
  } catch (err) {
    messageErrorOperationFailed(err);
    return;
  }
  const fileName = basename(pathToArchiveFile, ".br");
  const parsePathToDecompressedFile = join(pathToDestination, fileName);

  try {
    await access(parsePathToDecompressedFile);
    throw Error('exist');
  } catch (err) {
    if (err.message === 'exist') {
      messageErrorOperationFailed({message: "decompressed file already exist"});
      return;
    }
  }
  const rs = createReadStream(pathToArchiveFile);
  const ws = createWriteStream(parsePathToDecompressedFile);
  rs.on('error', (err) => {
    messageErrorOperationFailed(err);
    return;
  })
  ws.on('error', (err) => {
    messageErrorOperationFailed(err);
    return;
  })
  try {
    await pipeline(rs, createBrotliDecompress(), ws);
    messageSuccessful('decompressed');
  } catch (err) {
    messageErrorOperationFailed(err);
  }
}
export { decompress };