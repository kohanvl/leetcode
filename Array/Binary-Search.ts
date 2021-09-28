// Easy - https://leetcode.com/problems/binary-search/submissions/
const search = (nums: number[], target: number): number => {
  let pivot = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    pivot = Math.floor(left + (right - left) / 2);
    if (target === nums[pivot]) return pivot;
    else if (target > nums[pivot]) left = pivot + 1;
    else right = pivot - 1;
  }
  return -1;
};
