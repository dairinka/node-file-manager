import { argv } from "node:process";
import { createInterface } from 'node:readline/promises';
import { homedir } from 'node:os';
import { defineCommand } from './defineCommand.js';

const runFM = async () => {
  const userArgs = argv.slice(2);
  const userName = userArgs.filter(el => el.startsWith('--username'))[0].slice(11);
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${homedir()}`)

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    defineCommand(rl, userName);
  } catch {
    console.log('Operation failed');
  }
  
}


runFM();