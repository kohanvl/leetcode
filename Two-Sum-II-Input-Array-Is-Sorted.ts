// Easy - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;
  let sum = 0;

  while (left < right) {
    sum = numbers[left] + numbers[right];
    if (sum > target) right--;
    else if (sum < target) left++;
    else return [left + 1, right + 1];
  }
  return [-1, -1];
};
