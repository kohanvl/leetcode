// Medium - https://leetcode.com/problems/longest-consecutive-sequence/
const longestConsecutive = (nums: number[]): number => {
  if (!nums.length) return 0;

  let max = 0;
  const set = new Set(nums);
  for (let num of set) {
    if (set.has(num - 1)) continue;
    let curNum = num;
    let curMax = 1;
    while (set.has(curNum + 1)) {
      curNum++;
      curMax++;
    }
    max = Math.max(max, curMax);
  }

  return max;
};
