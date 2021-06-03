const permute = (
  nums: number[],
  set: number[] = [],
  ans: number[][] = [],
): number[][] => {
  if (!nums.length) ans.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const fNums = nums.filter((_, ind) => ind !== i);
    set.push(nums[i]);
    permute(fNums, set, ans);
    set.pop();
  }

  return ans;
};
