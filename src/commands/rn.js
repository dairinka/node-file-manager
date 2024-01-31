// Rename file (content should remain unchanged):
// rn path_to_file new_filename
import { access } from 'node:fs/promises';
import { rename } from "node:fs/promises";
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';

const rn = async(pathToFile, newFileName) => {
  try {
    await access(pathToFile)
  } catch {
    console.log(`\x1b[31mOperation failed:\x1b[0m File ${pathToFile} not exist`);
    return;
  }

  try{
    await access(newFileName);
    throw Error('exist');
  } catch(err) {
    if (err.message === "exist") {
      console.log(`\x1b[31mOperation failed:\x1b[0m File ${newFileName} already exist`);
      return;      
    }
  }


  try {
    await rename(pathToFile, newFileName);
    console.log("\x1b[32mfile was successfully renamed\x1b[0m");
  } catch {
    messageErrorOperationFailed();
  }
  
  
}
export {rn};