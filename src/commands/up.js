// Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
// up
import { messageForChangeLocation } from '../utility/messages/messageForChangeLocation.js';

const up = () => {
  process.chdir('..');
  messageForChangeLocation();
}
export { up };