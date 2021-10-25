// Medium - https://leetcode.com/problems/minimum-size-subarray-sum/
const minSubArrayLen = (target: number, nums: number[]): number => {
  const len = nums.length;
  let minLen = len + 1;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < len; right++) {
    sum += nums[right];
    while (sum >= target && left <= right) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLen === len + 1 ? 0 : minLen;
};
