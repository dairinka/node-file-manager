import { homedir } from 'node:os';
import { join, dirname, normalize, isAbsolute, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
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
// import { Worker } from 'node:worker_threads';
import { chdir, cwd } from 'node:process';


const defineCommand = (data) => {
  const dataArr = data.split(' ');
      try {
        const __dirname = join(dirname(fileURLToPath(import.meta.url)), "commands");
        switch (dataArr[0]) {
          case "up":
            if (dataArr.length > 1) throw Error("arg");
            // await createWorker(join(__dirname, 'up.js'));
            up();
            break;
          case "cd":
            if (dataArr.length !== 2) throw Error("arg");
           
            //await createWorker(join(__dirname, 'cd.js'), dataArr[1]);
            cd(dataArr[1]);
            console.log("Now you are in", process.cwd());
            break;
          case "ls":
            if (dataArr.length > 1) throw Error("arg");
            ls();
            break;
          case "cat":
            if (dataArr.length !== 2) throw Error("arg");
            cat(dataArr[1]);
            break;
          case "add":
            if (dataArr.length !== 2) throw Error("arg");
            add(dataArr[1]);
            break;
          case "rn":
            if (dataArr.length !== 3) throw Error("arg");
            rn(dataArr[1], dataArr[2]);
            break;
          case "cp":
            if (dataArr.length !== 3) throw Error("arg");
            cp(dataArr[1], dataArr[2]);
            break;
          case "mv":
            if (dataArr.length !== 3) throw Error("arg");
            mv(dataArr[1], dataArr[2])
            break;
          case "rm":
            if (dataArr.length !== 2) throw Error("arg");
            rm(dataArr[1]);
            break;
          case "os":
            if (dataArr.length !== 2) throw Error("arg");
            os(dataArr[1]);
            break;
          case "hash":
            if (dataArr.length !== 2) throw Error("arg");
            hash(dataArr[1]);
            break;
          case "compress":
            if (dataArr.length !== 3) throw Error("arg");
            compress(dataArr[1], dataArr[2])
            break;
          case "decompress":
            if (dataArr.length !== 3) throw Error("arg");
            decompress(dataArr[1], dataArr[2])
            break;
          default:
            throw Error("arg");
        }
      } catch (err) {
        if (err.message === "arg") console.log('Invalid input');
        else { console.log("Operation failed", err.message) };
      }
}
export {defineCommand};