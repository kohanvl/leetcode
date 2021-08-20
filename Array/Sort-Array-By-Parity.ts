// Easy - https://leetcode.com/problems/sort-array-by-parity/
const sortArrayByParity = (nums: number[]): number[] => {
  const evenNums: number[] = [];
  const oddNums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? evenNums.push(nums[i]) : oddNums.push(nums[i]);
  }
  return evenNums.concat(oddNums);
};
