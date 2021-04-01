/**
 * Easy - https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  return nums.filter((num) => num.toString().length % 2 === 0).length;
};
