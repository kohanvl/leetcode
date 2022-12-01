// ya
// Medium - https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
// [0,1,1,1,0,1,1,0,1] -> [1,1,1,0,1,1] -> 5
function longestSubarray(nums: number[]): number {
  let left = 0;
  let max = 0;
  let zeros = 0;
  for (let rigth = 0; rigth < nums.length; rigth++) {
    if (nums[rigth] === 0) zeros++;
    while (zeros > 1) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    max = Math.max(max, rigth - left);
  }
  return max;
}
