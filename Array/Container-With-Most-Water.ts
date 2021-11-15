// Medium - https://leetcode.com/problems/container-with-most-water/
const maxArea = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let container = 0;

  while (left < right) {
    const leftH = height[left];
    const rightH = height[right];
    if (leftH < rightH) {
      container = Math.max(leftH * (right - left), container);
      left++;
    } else {
      container = Math.max(rightH * (right - left), container);
      right--;
    }
  }
  return container;
};
