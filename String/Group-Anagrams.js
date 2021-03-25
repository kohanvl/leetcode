/**
 * Meduim - https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const hashMap = {};
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');
    hashMap[sortedStr] = hashMap[sortedStr]
      ? [...hashMap[sortedStr], strs[i]]
      : [strs[i]];
  }
  for (const key in hashMap) {
    result.push(hashMap[key]);
  }
  return result;
};
