// Medium - https://leetcode.com/problems/find-the-duplicate-number/
const findDuplicate = (nums: number[]): number => {
  const hashTable: {[key: string]: number} = {};
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = hashTable[nums[i]] + 1 || 1;
    if (hashTable[nums[i]] === 2) return nums[i];
  }
  return -1;
};
