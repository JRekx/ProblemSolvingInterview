/**
 * Checks if a string is a subsequence of another string.
 *
 * @param {string} str1 - The potential subsequence
 * @param {string} str2 - The string to search within
 * @returns {boolean} Whether or not str1 is a subsequence of str2
 */
// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let str1Idx = 0;
  let str2Idx = 0;
  if (!str1) return true;
  while (str2Idx < str2.length) {
    if (str1[str1Idx] === str2[str2Idx]) {
      str1Idx += 1;
    }
    if (str1Idx === str1.length) return true;
    str2Idx += 1;
  }
  return false;
}
