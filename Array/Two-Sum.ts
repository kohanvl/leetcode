// Easy - https://leetcode.com/problems/two-sum/
const twoSum = (nums: number[], target: number): number[] => {
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
