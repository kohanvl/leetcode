/**
 * Easy - https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const haspMap = {};
  for (let i = 0; i < nums.length; i++) {
    haspMap[nums[i]] = haspMap[nums[i]] ? haspMap[nums[i]] + 1 : 1;
    if (haspMap[nums[i]] > 1) return true;
  }
  return false;
};

/**
 * Using Array.prototype.sort()
 * const containsDuplicate = (nums) => {
 *   const sorted = nums.sort((a, b) => a - b);
 *   for (let i = 0; i < sorted.length; i++) {
 *     if (sorted[i] === sorted[i + 1]) return true;
 *   }
 *   return false;
 * };
 */
