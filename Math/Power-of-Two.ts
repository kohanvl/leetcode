// Easy - https://leetcode.com/problems/power-of-two/
function isPowerOfTwo(n: number): boolean {
  return Number.isInteger(Math.log2(n));
}
