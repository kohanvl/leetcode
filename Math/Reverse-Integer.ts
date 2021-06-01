// Easy - https://leetcode.com/problems/reverse-integer/
const reverse = (x: number): number => {
  const MAX_VALUE = Math.pow(2, 31);
  let rev: number = 0;
  let isNegative: boolean = x < 0 ? true : false;

  if (isNegative) x = -x;

  while (x) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (rev > MAX_VALUE || -rev < -MAX_VALUE) return 0;

  return isNegative ? -rev : rev;
};
