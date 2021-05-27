// Easy - https://leetcode.com/problems/power-of-three/
const isPowerOfThree = (n: number): boolean => {
  if (n === 1) return true;
  while (n > 3) {
    n /= 3;
  }
  return n / 3 === 1;
};
