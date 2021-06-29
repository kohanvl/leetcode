// Easy - https://leetcode.com/problems/counting-bits/
const countBits = (n: number): number[] => {
  const res: number[] = [0];
  for (let i = 1; i <= n; i++) {
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
};
