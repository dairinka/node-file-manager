const messageErrorOperationFailed = (err = null) => {
  console.log(`\x1b[31mOperation failed:\x1b[0m ${err.message}`)
}

export { messageErrorOperationFailed };