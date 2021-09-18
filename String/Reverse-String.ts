/**
 * Easy - https://leetcode.com/problems/reverse-string/
 * Do not return anything, modify s in-place instead.
 */
const reverseString = (s: string[]): void => {
  for (let i = 0; i < s.length; i++) {
    if (Math.floor(s.length / 2) === i) break;
    const temp = s[s.length - i - 1];
    s[s.length - i - 1] = s[i];
    s[i] = temp;
  }
};
