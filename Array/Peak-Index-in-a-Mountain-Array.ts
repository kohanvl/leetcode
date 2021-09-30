// Easy - https://leetcode.com/problems/peak-index-in-a-mountain-array/
const peakIndexInMountainArray = (arr: number[]): number => {
  let left = 0;
  let right = arr.length - 1;
  let pivot = 0;
  while (left <= right) {
    pivot = left + Math.floor((right - left) / 2);
    if (arr[pivot] > arr[pivot - 1] && arr[pivot] > arr[pivot + 1])
      return pivot;
    else if (arr[pivot] < arr[pivot + 1]) left = pivot;
    else right = pivot;
  }
  return -1;
};
