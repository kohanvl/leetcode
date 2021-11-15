// Medium - https://leetcode.com/problems/subsets/
const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const subset: number[] = [];

  const dfs = (i: number): void => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  };

  dfs(0);

  return result;
};
