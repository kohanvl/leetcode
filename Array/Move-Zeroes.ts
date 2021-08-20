/**
 * Easy - https://leetcode.com/problems/move-zeroes/
 * Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums: number[]): void => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
};