//Create empty file in current working directory:
// add new_file_name

import { access, writeFile } from 'node:fs/promises';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';

const add = async (newFileName) => {
  try {
    await access(newFileName);
    throw Error('exist');
  } catch (err) {
    if (err.message === "exist") {
      console.log(`\x1b[31mOperation failed: \x1b[0mFile ${newFileName} already exist `);
      return;
    }
  }
  try {
    await writeFile(newFileName, '');
    console.log('\x1b[32mFile was successfully added\x1b[0m')
  } catch {
    messageErrorOperationFailed();
  }
  
}
export { add };