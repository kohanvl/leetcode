/**
 * Easy - https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = hashTable[nums[i]] + 1 || 1;
  }

  for (const key in hashTable) {
    if (hashTable[key] === 1) return key;
  }
  return 0;
};
