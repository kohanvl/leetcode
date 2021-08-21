// Easy - https://leetcode.com/problems/height-checker/
const heightChecker = (heights: number[]): number => {
  let count = 0;
  const sorted = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) count++;
  }
  return count;
};
