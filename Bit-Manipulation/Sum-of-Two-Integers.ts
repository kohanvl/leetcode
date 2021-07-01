// Medium - https://leetcode.com/problems/sum-of-two-integers/
const getSum = (a: number, b: number): number => {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};
