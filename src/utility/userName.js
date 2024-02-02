import { argv } from 'process';
const getUserName = () => {
  const userArgs = argv.slice(2);
  return userArgs.filter(el => el.startsWith('--username'))[0]?.slice(11) || "Stranger";
}
const USERNAME = getUserName();
export { USERNAME };