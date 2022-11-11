/** ya
 * Hard - https://leetcode.com/problems/trapping-rain-water/solution/
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // use two pointers
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;
  while (left < right) {
    // if left H < right H
    if (height[left] < height[right]) {
      // check left H > leftMax value
      height[left] >= leftMax
        ? (leftMax = height[left]) // if yes -> new leftMax
        : (ans += leftMax - height[left]); // if no -> add to asnw
      left++;
    }
    // if left H > right H
    else {
      height[right] >= rightMax
        ? (rightMax = height[right])
        : (ans += rightMax - height[right]);
      right--;
    }
  }
  return ans;
};
