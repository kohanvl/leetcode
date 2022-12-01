// ya
// Medium - https://leetcode.com/problems/group-anagrams/
// ["eat","tea","tan","ate","nat","bat"] -> [["bat"],["nat","tan"],["ate","eat","tea"]]
const groupAnagrams = (strs: string[]): string[][] => {
  const hashMap = {};
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    // sort each word
    const sortedStr = strs[i].split('').sort().join('');
    // fill map: { aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
    hashMap[sortedStr] = hashMap[sortedStr]
      ? [...hashMap[sortedStr], strs[i]]
      : [strs[i]];
  }
  // push to result: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
  for (const key in hashMap) {
    result.push(hashMap[key]);
  }
  return result;
};
