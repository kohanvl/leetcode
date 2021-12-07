// Medium - https://leetcode.com/problems/k-th-symbol-in-grammar/
const kthGrammar = (n: number, k: number): number => {
  if (k <= 1) return 0;
  const mid = Math.ceil(k / 2);
  return kthGrammar(n, mid) === k % 2 ? 1 : 0;
};
