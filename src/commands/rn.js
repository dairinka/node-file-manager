// Rename file (content should remain unchanged):
// rn path_to_file new_filename
import { access } from 'node:fs/promises';
import { rename } from "node:fs/promises";
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';

const rn = async(pathToFile, newFileName) => {
  try {
    await access(pathToFile)
  } catch {
    messageErrorOperationFailed({message:`${pathToFile} not exist`})
    return;
  }

  try{
    await access(newFileName);
    throw Error('exist');
  } catch(err) {
    if (err.message === "exist") {
       messageErrorOperationFailed({message:`${newFileName} already exist`})
      return;      
    }
  }

  try {
    await rename(pathToFile, newFileName);
    messageSuccessful('renamed');
  } catch {
    messageErrorOperationFailed();
  }
  
  
}
export {rn};