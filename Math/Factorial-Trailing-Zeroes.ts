// Easy - https://leetcode.com/problems/factorial-trailing-zeroes/
const trailingZeroes = (n: number): number => {
  let zeros: number = 0;
  while (n) {
    n = Math.floor(n / 5);
    zeros += n;
  }
  return zeros;
};
