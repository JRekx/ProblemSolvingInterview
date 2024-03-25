/**
 * Counts the number of pairs in the array that sum to the given number.
 *
 * @param {number[]} arr - The array to search.
 * @param {number} num - The target sum.
 * @returns {number} The number of pairs that sum to the target.
 */
// add whatever parameters you deem necessary
function countPairs(arr, num) {
  arr.sort((a, b) => a - b);
  let cnt = 0;
  let strt = 0;
  let end = arr.length - 1;
  while (strt < end) {
    let sum = arr[strt] + arr[end];
    if (sum === num) {
      cnt++;
      strt++;
      end--;
    } else if (sum < num) {
      strt++;
    } else {
      end--;
    }
  }
  return cnt;
}
