// Medium - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
const findMin = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  if (nums[right] > nums[left]) return nums[left];

  while (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    else if (nums[mid] < nums[mid - 1]) return nums[mid];

    if (nums[mid] > nums[0]) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
