// Easy - https://leetcode.com/problems/reverse-words-in-a-string-iii/
const reverseWords = (s: string): string => {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
};
