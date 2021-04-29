/**
 * Easy - https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const hashTable = {};
  const result = [];
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
