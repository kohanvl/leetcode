// Easy - https://leetcode.com/problems/summary-ranges/
function summaryRanges(nums: number[]): string[] {
  let i = 0;
  const range: string[] = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] + 1 !== nums[j + 1]) {
      if (i === j) range.push(nums[j].toString());
      else range.push(nums[i] + '->' + nums[j]);
      i = j + 1;
    }
  }
  return range;
}
