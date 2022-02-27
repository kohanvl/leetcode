// Easy - https://leetcode.com/problems/search-insert-position/
const searchInsert = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left;
};
