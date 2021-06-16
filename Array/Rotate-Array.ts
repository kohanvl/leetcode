/**
 Medium - https://leetcode.com/problems/rotate-array/
 Do not return anything, modify nums in-place instead.
 */
const rotate = (nums: number[], k: number): void => {
  for (let i = 0; i < k; i++) {
    nums.unshift(...nums.splice(-1));
  }
};
