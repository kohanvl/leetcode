// Easy - https://leetcode.com/problems/third-maximum-number/
const thirdMax = (nums: number[]): number => {
  const uniqSortedArr = [...new Set(nums.sort((a, b) => a - b))];
  const len = uniqSortedArr.length;

  if (len >= 3) return uniqSortedArr[len - 3];
  else return uniqSortedArr[len - 1];
};
