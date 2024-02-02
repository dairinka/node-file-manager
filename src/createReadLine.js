import { cwd } from "node:process";
import { createInterface } from 'node:readline/promises';
import { closeFM } from './utility/closeFileManager.js';
import { defineCommand } from './defineCommand.js';


const createReadLine = async() => {
  const rl = createInterface({ input: process.stdin, output: process.stdout, prompt: '\x1b[90mType here > \x1b[0m' });

  rl.on('line', async (data) => {

    if (data === '.exit') closeFM(rl);
    else {
      console.log(`\x1b[34mYou are currently in ${cwd()}\x1b[0m`);
      await defineCommand(data);
       
    }
  })
  
  rl.on('SIGINT', () => {
    closeFM(rl);
  });

}




export { createReadLine };