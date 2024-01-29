import { homedir } from 'node:os';

const defineCommand = (rl, userName) => {

  rl.on('line', (data) => {

    if (data === '.exit') closeFM(userName, rl);
    else {
      //TODO: replace homedir to current work dir
      console.log(`You are currently in ${homedir()}`)
      switch (data) {
        case ("i"):

          break;
        default:
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