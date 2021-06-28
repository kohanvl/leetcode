// Easy - https://leetcode.com/problems/number-of-good-pairs/
const numIdenticalPairs = (nums: number[]): number => {
  const hashTable: {[key: string]: number} = {};
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = hashTable[nums[i]] + 1 || 1;
  }
  for (const key in hashTable) {
    count += (hashTable[key] * (hashTable[key] - 1)) / 2;
  }
  return count;
};
