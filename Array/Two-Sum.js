/**
 * Easy - https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const secondNumberIndex = hashMap[target - nums[i]];
    if (secondNumberIndex && secondNumberIndex !== i)
      return [i, secondNumberIndex];
  }
};
