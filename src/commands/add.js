//Create empty file in current working directory:
// add new_file_name

import { access, writeFile } from 'node:fs/promises';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';

const add = async (newFileName) => {
  try {
    await access(newFileName);
    throw Error('exist');
  } catch (err) {
    if (err.message === "exist") {
      messageErrorOperationFailed({message: `${newFileName} already exist`})
      return;
    }
  }
  try {
    await writeFile(newFileName, '');
    messageSuccessful('added')
  } catch(err) {
    messageErrorOperationFailed(err);
  }
  
}
export { add };