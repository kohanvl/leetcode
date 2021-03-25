/**
 * Easy - https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  let result = '';
  let position = 0;
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      if (j === 0) position = i;
      result += haystack[i];
      j++;
    } else {
      if (j > 0 && j < needle.length) {
        i = i - j;
        j = 0;
        result = '';
      }
    }
  }
  return result === needle ? position : -1;
};
