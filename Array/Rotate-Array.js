/**
 * Medium - https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Approach 2 - only js
var rotate = function (nums, k) {
  nums.unshift(...Array(k));
  for (let i = 0; i < k; i++) {
    nums[k - i - 1] = nums[nums.length - 1];
    nums.pop();
  }
};

/*
Approach 1 - build inn methods
const rotate = (nums: number[], k: number): void => {
  for (let i = 0; i < k; i++) {
    nums.unshift(...nums.splice(-1));
  }
};
*/
