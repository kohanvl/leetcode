/**
 * Easy - https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  const nums = n.toString().split('');
  const product = nums.reduce((acc, num) => acc * +num, 1);
  const sum = nums.reduce((acc, num) => acc + +num, 0);

  return product - sum;
};
