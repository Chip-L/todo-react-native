/**
 * This will create a random 12 digit numeric ID
 * @returns number
 */
export default function randomID() {
  return Math.floor(Math.random() * 12 ** 10);
}
