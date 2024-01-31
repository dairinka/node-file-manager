// Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
// up

const up = () => {
  process.chdir('..');
}
export { up };