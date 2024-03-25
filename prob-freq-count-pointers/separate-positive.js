/**
 * Separates a numeric array into positive and negative numbers.
 * Moves all positive numbers to the left side of the array and all
 * negative numbers to the right side while maintaining order of
 * numbers.
 *
 * @param {number[]} nums - Array of numbers to separate
 * @returns {number[]} - Input array with positives on left and
 * negatives on right
 */
// add whatever parameters you deem necessary
function separatePositive(nums) {
  let strt = 0;
  let end = nums.length - 1;

  while (strt < end) {
    if (nums[strt] < 0 && nums[end] > 0) {
      var temp = nums[strt];
      nums[strt] = nums[end];
      nums[end] = temp;

      strt += 1;
      end -= 1;
    } else {
      if (nums[strt] > 0) strt += 1;
      else end -= 1;
    }
  }
  return nums;
}
