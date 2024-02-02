//Read file and print it's content in console (should be done using Readable stream):
// cat path_to_file
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';


const cat = (pathToFile) => {
  let emptyFile = true;

  const readStream = createReadStream(pathToFile);

  readStream.on('data', (chunk) => {
    stdout.write(chunk + '\n', (err) => {
      if (err) messageErrorOperationFailed();
      emptyFile = false;
      console.log('\x1b[90mThe End of file\x1b[0m');
    });
  })

  readStream.on('error', (err) => {
    messageErrorOperationFailed(err);
    readStream.close();
  })

  readStream.on('end', () => {
    if (emptyFile) {
      console.log('\x1b[90mEmpty file\x1b[0m');
    }
  });

}
export { cat };