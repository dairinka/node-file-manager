// Calculate hash for file and print it into console
// hash path_to_file
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { stdout } from 'process';

const hash = (pathToFile) => {
  const ch = createHash('sha256');
  const input = createReadStream(pathToFile);
  input.pipe(ch).setEncoding('hex').pipe(stdout);
  stdout.on('unpipe', () => console.log(''));
}
export {hash};