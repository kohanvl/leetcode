// Easy - https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
const findNumbers = (nums: number[]): number => {
  return nums.filter((num) => num.toString().length % 2 === 0).length;
};
