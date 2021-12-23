// Medium - https://leetcode.com/problems/maximum-product-subarray/submissions/
const maxProduct = (nums: number[]): number => {
  let res = Math.max(...nums);
  let max = 1;
  let min = 1;
  for (let i = 0; i < nums.length; i++) {
    let tempMax = max * nums[i];
    let tempMin = min * nums[i];
    max = Math.max(tempMax, tempMin, nums[i]);
    min = Math.min(tempMax, tempMin, nums[i]);
    res = Math.max(res, max);
  }
  return res;
};
