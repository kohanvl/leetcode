// Medium - https://leetcode.com/problems/letter-case-permutation/
const letterCasePermutation = (s: string): string[] => {
  const result = [];
  traverse('', s, 0, result);
  return result;
};

const traverse = (cur: string, s: string, i: number, res: string[]): void => {
  if (cur.length >= s.length) {
    res.push(cur);
    return;
  }
  traverse(cur + s[i], s, i + 1, res);
  if (/[a-zA-Z]/.test(s[i])) traverse(cur + swapCase(s[i]), s, i + 1, res);
  return;
};

const swapCase = (s: string): string => {
  if (s === s.toLowerCase()) return s.toUpperCase();
  else return s.toLowerCase();
};
