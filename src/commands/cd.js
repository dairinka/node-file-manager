// Go to dedicated folder from current directory (path_to_directory can be relative or absolute)
// cd path_to_directory
import { parse } from 'path';
import { messageForChangeLocation } from '../utility/messages/messageForChangeLocation.js';

const cd = (path) => {
  // if (!isCorrectRootDir(path)) return process.chdir(path + '/');
  process.chdir(path);
  messageForChangeLocation();
}

function getPathDetailes(path) {
  const pathDetailes = parse(path);
  const root = pathDetailes.root?.toLowerCase();
  const pathDirectories = pathDetailes.dir;
  return { root, pathDirectories };
}

function isCorrectRootDir(path) {
  const { root, pathDirectories } = getPathDetailes(path);
  if (root.search(/^[c-j]:$/i) != -1 && pathDirectories.length == 2) {
    return false;
  }
}
export { cd };