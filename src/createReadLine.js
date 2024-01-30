import { cwd } from "node:process";
import { createInterface } from 'node:readline/promises';
import { closeFM } from './utility/closeFileManager.js';
import { defineCommand } from './defineCommand.js';


const createReadLine = () => {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  rl.on('line', async (data) => {

    if (data === '.exit') closeFM(rl);
    else {
      console.log(`You are currently in ${cwd()}`);
      defineCommand(data);   
    }
  })

  rl.on('SIGINT', () => {
    closeFM(rl);
  });

}




export { createReadLine };