/**
 * Checks if any pair of numbers in the given array sums to the given number.
 *
 * @param {number[]} arr - The array to search
 * @param {number} num - The target number to check for
 * @returns {boolean} True if a pair sums to the target, false otherwise
 */
// add whatever parameters you deem necessary
function averagePair(arr, num) {
  let strt = 0;
  let end = arr.length - 1;

  while (strt <= end) {
    let avg = (arr[strt] + arr[end]) / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      strt++;
    } else {
      end--;
    }
  }
  return false;
}
