// Medium - https://leetcode.com/problems/powx-n/
const myPow = (x: number, n: number): number => {
  if (n === 0) return 1;
  const pow = Math.abs(n);
  const res =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
  return n < 0 ? 1 / res : res;
};
