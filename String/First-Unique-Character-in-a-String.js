/**
 * Easy - https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */

// 1 - Optimized solution
const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

// 2 - HashMap solution
const firstUniqChar = (s) => {
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = hashMap[s[i]] ? ++hashMap[s[i]] : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
