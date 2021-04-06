/**
 * Medium - https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  return nums.map((_, i) =>
    nums.reduce((mult, num, j) => (i !== j ? mult * num : mult), 1),
  );
};
