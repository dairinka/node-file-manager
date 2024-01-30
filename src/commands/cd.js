// Go to dedicated folder from current directory (path_to_directory can be relative or absolute)
// cd path_to_directory
import { parse } from 'path';
import { homedir } from 'os';


const cd = (path) => {
  if (isDirectoryAboveHomeDir(path)) return process.chdir(homedir());
  if (!isCorrectRootDir(path)) return process.chdir(path + '/');
  // TODO case cd ../
  process.chdir(path);
}

function getPatheDetailes(path) {
  const pathDetailes = parse(path);
  const root = pathDetailes.root?.toLowerCase();
  const pathDirectories = pathDetailes.dir;
  return { root, pathDirectories };
}

function isDirectoryAboveHomeDir(path) {
  const { root, pathDirectories } = getPatheDetailes(path);
  const homedirPath = parse(homedir()).dir;

  if (root.startsWith('c') && !pathDirectories.startsWith(homedirPath)) return true;
}

function isCorrectRootDir(path) {
  const { root, pathDirectories } = getPatheDetailes(path);
  if (root.search(/^[c-j]:$/i) != -1 && pathDirectories.length == 2) {
    return false;
  }
}
export { cd };