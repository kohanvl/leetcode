/**
 * Easy - https://leetcode.com/problems/array-partition/
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    // add every even value
    sum += nums[i];
  }
  return sum;
};
