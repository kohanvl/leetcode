// Medium - https://leetcode.com/problems/reverse-words-in-a-string/
const reverseWords = (s: string): string => {
  return s
    .split(' ')
    .filter((w) => w !== '')
    .reverse()
    .join(' ');
};
