import { cwd, chdir } from "node:process";
import { homedir } from 'node:os';

import { createReadLine } from './createReadLine.js';
import { USERNAME } from './utility/userName.js';

const runFM = async () => {

  process.chdir(homedir());

  console.log(`Welcome to the File Manager, ${USERNAME}!`);
  console.log(`\x1b[34mYou are currently in ${process.cwd()}\x1b[0m`)
  
  try {
    createReadLine();
  } catch {
    console.log('\x1b[31mOperation failed:\x1b[0m');
  }
  
}


runFM();