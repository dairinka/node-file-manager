import { argv } from "node:process";
import { createInterface } from 'node:readline/promises';

import { defineCommand } from './defineCommand.js';

const runFM = async () => {
  const userArgs = argv.slice(2);
  const userName = userArgs.filter(el => el.startsWith('--username'))[0].slice(11);
  console.log(`Welcome to the File Manager, ${userName}!`);

  const rl = createInterface({ input: process.stdin, output: process.stdout })
  defineCommand(rl, userName);
}


runFM();