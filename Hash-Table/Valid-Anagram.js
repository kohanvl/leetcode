/**
 * Easy - https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = hashTable[s[i]] ? hashTable[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    hashTable[t[i]] = hashTable[t[i]] - 1;
  }

  for (const key in hashTable) {
    if (hashTable[key] !== 0) return false;
  }

  return true;
};
