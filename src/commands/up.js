// Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
// up
import { homedir } from "node:os";
import { parse } from "node:path";

const up = () => {
  const userHomeDir = homedir();
  console.log("userHomeDir", userHomeDir);

  const currentDirrectory = process.cwd();
  console.log("currentDirrectory", currentDirrectory);
  console.log("userHomeDir === currentDirrectory", userHomeDir === currentDirrectory);
  const newCurrentDir = (userHomeDir === currentDirrectory)?
                        userHomeDir :
                        process.chdir('..');
  console.log("Now you are in ", process.cwd());


}
export { up };