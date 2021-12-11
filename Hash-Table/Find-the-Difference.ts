// Easy - https://leetcode.com/problems/find-the-difference/
const findTheDifference = (s: string, t: string): string => {
  const hashTable = {};
  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = hashTable[s[i]] + 1 || 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (hashTable[t[i]]) {
      hashTable[t[i]] = hashTable[t[i]] - 1;
    } else {
      return t[i];
    }
  }
  return '';
};
