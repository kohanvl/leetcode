// Easy - https://leetcode.com/problems/reverse-bits/
const reverseBits = (n: number): number => {
  const BITS: number = 32;
  let rev: number = 0;
  for (let i = 0; i < BITS; i++) {
    rev = rev * 2 + (n & 1);
    n >>= 1;
  }
  return rev;
};
