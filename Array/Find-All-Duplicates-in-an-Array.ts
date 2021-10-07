// Medium - https://leetcode.com/problems/find-all-duplicates-in-an-array/
const findDuplicates = (nums: number[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) result.push(Math.abs(nums[i]));
    nums[index] *= -1;
  }
  return result;
};
