const messageForChangeLocation = () => {
  console.log(`\x1b[32mLocation was changed to ${process.cwd()}\x1b[0m`);
}
export { messageForChangeLocation };