import { USERNAME } from './userName.js';

const closeFM = (rl) => {
  console.log(`\x1b[32mThank you for using File Manager, ${USERNAME}, goodbye!\x1b[0m`);
  rl.close();
}

export { closeFM };