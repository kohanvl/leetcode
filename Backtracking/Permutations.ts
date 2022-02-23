// Medium - https://leetcode.com/problems/permutations/
// [1,2,3] -> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(nums: number[]): number[][] {
  return helper(nums, [], []);
}

function helper(nums: number[], arr: number[], ans: number[][]): number[][] {
  if (!nums.length) ans.push([...arr]);
  for (let i = 0; i < nums.length; i++) {
    const fNums = nums.filter((_, ind) => ind !== i); // exclude current number
    arr.push(nums[i]);
    helper(fNums, arr, ans);
    arr.pop();
  }
  return ans;
}
