// Easy - https://leetcode.com/problems/intersection-of-two-arrays-ii/
const intersect = (nums1: number[], nums2: number[]): number[] => {
  const hashTable = {};
  const result: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    hashTable[nums1[i]] = hashTable[nums1[i]] + 1 || 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hashTable[nums2[i]]) {
      hashTable[nums2[i]] = hashTable[nums2[i]] - 1;
      result.push(nums2[i]);
    }
  }
  return result;
};
