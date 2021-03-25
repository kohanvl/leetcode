/**
 * Easy - https://leetcode.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const hashMap = {};
  for (let i = 0; i < ransomNote.length; i++) {
    hashMap[ransomNote[i]] = hashMap[ransomNote[i]]
      ? (hashMap[ransomNote[i]] += 1)
      : 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    if (hashMap[magazine[i]] && hashMap[magazine[i]] !== 0) {
      hashMap[magazine[i]] -= 1;
    }
    if (hashMap[magazine[i]] === 0) {
      delete hashMap[magazine[i]];
    }
  }
  return Object.keys(hashMap).length === 0 ? true : false;
};
