/**
 * Easy - https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(max, sum);
  }

  return max;
};
