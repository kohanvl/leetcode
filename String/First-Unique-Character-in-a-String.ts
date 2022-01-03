// Easy - https://leetcode.com/problems/first-unique-character-in-a-string/
const firstUniqChar = (s: string): number => {
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
