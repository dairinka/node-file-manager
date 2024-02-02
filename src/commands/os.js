// Operating system info (prints following information in console)
// Get EOL (default system End-Of-Line) and print it to console
// os --EOL
// Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
// os --cpus
// Get home directory and print it to console
// os --homedir
// Get current system user name (Do not confuse with the username that is set when the application starts) and print it to console
// os --username
// Get CPU architecture for which Node.js binary has compiled and print it to console
// os --architecture
import { EOL, cpus, homedir, userInfo , arch} from 'node:os';
const os = (arg) => {
  switch (arg) {
    case "--EOL":
      console.log(`The EOL of your operation system in unicode is ${EOL.charCodeAt(0)}`)
      console.log(`And it looks like => ${EOL}`)
      break;
    case "--cpus":
      const userCpus = cpus();
      const cpusInfo = userCpus.map(({model, speed}) => ({'Model': model, 'Clock rate': speed}));
      console.log(`Total CPUs = ${userCpus.length}`);
      console.table(cpusInfo);
      break;
    case "--homedir":
      console.log(`Your homedir is ${homedir()}`)
      break;
    case "--username":
      console.log(`Your username is ${userInfo().username}`);
      break;
    case "--architecture":
      console.log(`CPU architecture is ${arch()}`);
      break;
    default:
      throw Error;
  }
}
export { os };