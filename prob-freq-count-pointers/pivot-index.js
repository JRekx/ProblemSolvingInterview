/**
 * Finds the pivot index of the given array nums. The pivot index is the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.
 *
 * @param {number[]} nums - The input array.
 * @returns {number} The pivot index of the array or -1 if no such index exists.
 */
// add whatever parameters you deem necessary
function pivotIndex(nums) {
  let rghtSum = nums.reduce((a, b) => a + b, 0);
  let lftSum = 0;
  let pivotIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    lftSum += nums[i];
    if (lftSum === rghtSum - lftSum) {
      pivotIdx = i;
      break;
    }
    rghtSum -= nums[i];
  }

  return pivotIdx;
}
