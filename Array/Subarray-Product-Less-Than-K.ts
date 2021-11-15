// Medium - https://leetcode.com/problems/subarray-product-less-than-k/
const numSubarrayProductLessThanK = (nums: number[], k: number): number => {
  if (k <= 1) return 0;

  let prod = 1;
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    prod *= nums[right];

    while (prod >= k) {
      prod /= nums[left];
      left++;
    }

    result += right - left + 1;
    right++;
  }
  return result;
};
