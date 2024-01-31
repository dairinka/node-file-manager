// Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
// up

const up = () => {

  process.chdir('..');
  console.log("Now you are in ", process.cwd());
}
export { up };