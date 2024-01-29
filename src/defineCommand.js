import { homedir } from 'node:os';
import { add } from "./commands/add.js";
import { cat } from "./commands/cat.js";
import { cd } from "./commands/cd.js";
import { compress } from "./commands/compress.js";
import { cp } from "./commands/cp.js";
import { decompress } from "./commands/decompress.js";
import { hash } from "./commands/hash.js";
import { ls } from "./commands/ls.js";
import { mv } from "./commands/mv.js";
import { os } from "./commands/os.js";
import { rm } from "./commands/rm.js";
import { rn } from "./commands/rn.js";
import { up } from "./commands/up.js";

const defineCommand = (rl, userName) => {

  rl.on('line', (data) => {

    if (data === '.exit') closeFM(userName, rl);
    else {
      //TODO: replace homedir to current work dir
      console.log(`You are currently in ${homedir()}`);
      const dataArr = data.split(' ');
      try {
        switch (dataArr[0]) {
          case "up":
            if (dataArr.length > 1) throw Error;
            up();
            break;
          case "cd":
            if (dataArr.length !== 2) throw Error;
            cd(dataArr[1]);
            break;
          case "ls":
            if (dataArr.length > 1) throw Error;
            ls();
            break;
          case "cat":
            if (dataArr.length !== 2) throw Error;
            cat(dataArr[1]);
            break;
          case "add":
            if (dataArr.length !== 2) throw Error;
            add(dataArr[1]);
            break;
          case "rn":
            if (dataArr.length !== 3) throw Error;
            rn(dataArr[1], dataArr[2]);
            break;
          case "cp":
            if (dataArr.length !== 3) throw Error;
            cp(dataArr[1], dataArr[2]);
            break;
          case "mv":
            if (dataArr.length !== 3) throw Error;
            mv(dataArr[1], dataArr[2])
            break;
          case "rm":
            if (dataArr.length !== 2) throw Error;
            rm(dataArr[1]);
            break;
          case "os":
            if (dataArr.length !== 2) throw Error;
            os(dataArr[1]);
            break;
          case "hash":
            if (dataArr.length !== 2) throw Error;
            hash(dataArr[1]);
            break;
          case "compress":
            if (dataArr.length !== 3) throw Error;
            compress(dataArr[1], dataArr[2])
            break;
          case "decompress":
            if (dataArr.length !== 3) throw Error;
            decompress(dataArr[1], dataArr[2])
            break;
          default:
            throw Error;
        }
      } catch {
        console.log('Invalid input');
      }

    }
  })

  rl.on('SIGINT', () => {
    closeFM(userName, rl);
  });

}

function closeFM(userName, rl) {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  rl.close();
}

export { defineCommand };