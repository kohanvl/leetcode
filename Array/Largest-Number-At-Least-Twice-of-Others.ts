// Easy - https://leetcode.com/problems/largest-number-at-least-twice-of-others/
const dominantIndex = (nums: number[]): number => {
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const maxHalf = max / 2;
  for (let i = 0; i < nums.length; i++) {
    if (maxHalf < nums[i] && maxIndex !== i) return -1;
  }
  return maxIndex;
};
