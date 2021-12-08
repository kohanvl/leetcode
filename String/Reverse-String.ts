/**
 * Easy - https://leetcode.com/problems/reverse-string/
 * Do not return anything, modify s in-place instead.
 */
// Solution 2 - Recursive
const reverseString = (s: string[]): void => {
  const helper = (str: string[], i: number): void => {
    if (!str.length || Math.floor(str.length / 2) === i) return;
    const temp = s[s.length - i - 1];
    s[s.length - i - 1] = s[i];
    s[i] = temp;
    helper(str, i + 1);
  };
  helper(s, 0);
};

/** Solution 1 - Iterative
 * const reverseString = (s: string[]): void => {
 *  for (let i = 0; i < s.length; i++) {
 *   if (Math.floor(s.length / 2) === i) break;
 *   const temp = s[s.length - i - 1];
 *   s[s.length - i - 1] = s[i];
 *   s[i] = temp;
 *  }
 * };
 */
