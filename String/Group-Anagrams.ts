// Medium - https://leetcode.com/problems/group-anagrams/
const groupAnagrams = (strs: string[]): string[][] => {
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
