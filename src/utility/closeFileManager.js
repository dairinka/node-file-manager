import { USERNAME } from './userName.js';

const closeFM = (rl) => {
  console.log(`Thank you for using File Manager, ${USERNAME}, goodbye!`);
  rl.close();
}

export { closeFM };