// Print in console list of all files and folders in current directory. List should contain:
// - files and folder names (for files - with extension)
// - folders and files are sorted in alphabetical order ascending, but list of folders goes first
// - type of directory content should be marked explicitly (e.g. as a corresponding column value)
// ls
import { opendir, stat } from "node:fs/promises";
import { join } from "node:path";

const ls = async () => {
  const currentDir = await opendir(process.cwd());
  const dirsArr = [];
  const filesArr = [];
  for await (const dirent of currentDir) {
    const direntPath = join(dirent.path, dirent.name);
    try {
      const isDirentFile = (await stat(direntPath)).isFile();
      isDirentFile ?
        filesArr.push({ Name: dirent.name, Type: 'file' }) :
        dirsArr.push({ Name: dirent.name, Type: 'directory' });
    } catch { }

  }
  console.table(dirsArr.concat(filesArr));
}
export { ls };