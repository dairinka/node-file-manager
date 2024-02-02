// Delete file:
// rm path_to_file

import { rm as remove } from "node:fs/promises";
import { messageErrorOperationFailed } from '../utility/messages/messageErrorOperationFailed.js';
import { messageSuccessful } from '../utility/messages/messageSuccessful.js';

const rm = async (pathToFile) => {
  try {
    await remove(pathToFile);
    messageSuccessful('removed');
  } catch (err) {
    messageErrorOperationFailed(err);
  }
}
export { rm };