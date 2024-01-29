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
const os = (arg) => {
  switch(arg){
    case "--EOL":
      break;
    case "--cpus":
      break;
    case "--homedir":
      break;
    case "--username":
      break;
    case "--architecture":
      break;
    default:
      throw Error;
  }
}
export { os };