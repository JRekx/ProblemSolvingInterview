/**
 * Finds the length of the longest consecutive fall in an array of numbers
 *
 * @param {number[]} nums - The input array of numbers
 * @returns {number} The length of the longest consecutive fall
 */
// add whatever parameters you deem necessary
function longestFall(nums) {
  let counter = 1;
  let maxCounter = 0;

  if (nums.length === 0) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      counter++;
      maxCounter = Math.max(maxCounter, counter);
    } else {
      counter = 1;
    }
  }

  return maxCounter || 1;
}
