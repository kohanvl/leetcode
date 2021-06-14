// Medium - https://leetcode.com/problems/house-robber/
const rob = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  const dp: number[] = [0, nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(nums[i] + dp[i - 1], dp[i]);
  }
  return dp[dp.length - 1];
};
