/**
 Medium - https://leetcode.com/problems/sort-colors/
 Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums: number[]): void => {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = hashTable[nums[i]] ? hashTable[nums[i]] + 1 : 1;
  }
  nums.length = 0;
  for (let key in hashTable)
    for (let i = 0; i < hashTable[key]; i++) nums.push(+key);
};
