/**
 * Checks if a message can be constructed from a set of letters.
 *
 * Counts the frequencies of each character in the message and letters.
 * Returns true if each character in the message occurs no more frequently
 * than in the letters, otherwise returns false.
 */
// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
  const ltrsFrq = {};
  const msgFrq = {};

  for (let char of ltrs) {
    ltrsFrq[char] = ++ltrsFrq[char] || 1;
  }

  for (let char of msg) {
    msgFrq[char] = ++msgFrq[char] || 1;
  }

  for (let char in msgFrq) {
    if (msgFrq[char] > ltrsFrq[char]) {
      return false;
    }
    if (msgFrq[char] > ltrsFrq[char]) {
      return false;
    }
  }

  return true;
}
