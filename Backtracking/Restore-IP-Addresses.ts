// Medium - https://leetcode.com/problems/restore-ip-addresses/
const restoreIpAddresses = (s: string): string[] => {
  const res: string[] = [];

  if (s.length > 12) return res;

  const backtrack = (i: number, dots: number, curIP: string): void => {
    if (dots === 4 && i === s.length) {
      res.push(curIP.substring(0, curIP.length - 1));
      return;
    }
    if (dots > 4) return;
    for (let j = i; j < Math.min(i + 3, s.length); j++) {
      if (+s.substring(i, j + 1) < 256 && (i === j || s[i] !== '0')) {
        backtrack(j + 1, dots + 1, curIP + s.substring(i, j + 1) + '.');
      }
    }
  };

  backtrack(0, 0, '');
  return res;
};
