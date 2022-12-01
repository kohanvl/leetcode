// ya
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Two pointers solution
const sortedSquares = (nums: number[]): number[] => {
  let head = 0;
  let tail = nums.length - 1;
  const result: number[] = [];

  while (head <= tail) {
    if (nums[head] ** 2 > nums[tail] ** 2) result.push(nums[head++] ** 2);
    else result.push(nums[tail--] ** 2);
  }
  return result.reverse();
};

/** Simple solution with built in operations
 * const sortedSquares = (nums: number[]): number[] => {
 *   return nums.map((num) => num ** 2).sort((a, b) => a - b);
 * };
 */
