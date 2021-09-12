// Easy - https://leetcode.com/problems/find-pivot-index/
const pivotIndex = (nums: number[]): number => {
  const prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  const lastPS = prefixSum[prefixSum.length - 1];
  for (let i = 0; i < nums.length; i++) {
    const postfixSum = lastPS - prefixSum[i] - nums[i];
    if (prefixSum[i] === postfixSum) return i;
  }
  return -1;
};
