/**
PREMIUM
Medium - https://leetcode.com/problems/max-consecutive-ones-ii/

Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.
Example:
Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s. 
After flipping, the maximum number of consecutive 1s is 4.
Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */

const findMaxConsecutiveOnes = (nums) => {
  let l = 0;
  let r = 0;
  let k = 1;
  while (r < nums.length) {
    if (nums[r] === 0) k--;
    if (k < 0 && nums[l++] === 0) k++;
    r++;
  }
  return r - l;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0])); // 4
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1, 1, 0])); // 7
console.log(findMaxConsecutiveOnes([1, 0, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([1])); // 1
console.log(findMaxConsecutiveOnes([0])); // 1
console.log(findMaxConsecutiveOnes([0, 0, 0])); // 1
console.log(findMaxConsecutiveOnes([1, 1, 1])); // 3
