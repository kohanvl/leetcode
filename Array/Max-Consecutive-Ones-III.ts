// Medium - https://leetcode.com/problems/max-consecutive-ones-iii/
function longestOnes(nums: number[], k: number): number {
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    if (nums[r] === 0) k--;
    if (k < 0 && nums[l++] === 0) k++;
    r++;
  }
  return r - l;
}
