import { cwd, chdir } from "node:process";
import { homedir } from 'node:os';

import { createReadLine } from './createReadLine.js';
import { USERNAME } from './utility/userName.js';

const runFM = async () => {

  process.chdir(homedir());

  console.log(`Welcome to the File Manager, ${USERNAME}!`);
  console.log(`You are currently in ${process.cwd()}`)
  
  try {
    createReadLine();
  } catch {
    console.log('Operation failed');
  }
  
}


runFM();