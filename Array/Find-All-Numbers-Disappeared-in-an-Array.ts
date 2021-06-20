// Easy - https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
const findDisappearedNumbers = (nums: number[]): number[] => {
  const len = nums.length;
  const result: number[] = [];
  nums.sort((a, b) => a - b);
  const uniqNums = [...new Set(nums)];
  let num = 1;
  let i = 0;

  while (num <= len) {
    if (uniqNums[i] !== num) {
      result.push(num);
      i--;
    }
    num++;
    i++;
  }

  return result;
};
