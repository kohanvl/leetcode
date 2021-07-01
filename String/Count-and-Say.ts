// Medium - https://leetcode.com/problems/count-and-say/submissions/
const countAndSay = (n: number): string => {
  if (n === 1) return '1';

  const str: string = countAndSay(n - 1);
  let res: string = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      res += count + '' + str[i];
      count = 1;
    }
  }

  return res;
};
