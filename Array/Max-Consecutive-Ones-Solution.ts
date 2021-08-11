// Easy - https://leetcode.com/problems/max-consecutive-ones/
const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = nums[i] === 1 ? count + 1 : 0;
    max = Math.max(max, count);
  }
  return max;
};
