// ya
// Easy - https://leetcode.com/problems/two-sum/
/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
const twoSum = (nums: number[], target: number): number[] => {
  const hashMap = {};
  // fill map
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    // check answer using mines from each num
    const secondNumberIndex = hashMap[target - nums[i]];
    if (secondNumberIndex && secondNumberIndex !== i)
      return [i, secondNumberIndex];
  }
};
