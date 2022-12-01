/* ya
Easy - https://leetcode.com/problems/summary-ranges/
Compress array. 
Example:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
*/
function summaryRanges(nums: number[]): string[] {
  let i = 0;
  const range: string[] = [];
  for (let j = 0; j < nums.length; j++) {
    // if cur + 1 !== curInd + 1
    if (nums[j] + 1 !== nums[j + 1]) {
      if (i === j) range.push(nums[j].toString());
      else range.push(nums[i] + '->' + nums[j]);
      i = j + 1;
    }
  }
  return range;
}
