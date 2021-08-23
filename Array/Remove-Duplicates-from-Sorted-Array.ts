/**
 * Easy - https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[j + 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
