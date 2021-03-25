/**
 * Easy - https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const str = s.split(/\W|_/).join('');
  const strReversed = str.split('').reverse().join('');
  return str.toLowerCase() === strReversed.toLowerCase();
};
