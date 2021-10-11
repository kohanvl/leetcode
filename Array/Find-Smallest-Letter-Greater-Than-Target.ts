// Easy - https://leetcode.com/problems/find-smallest-letter-greater-than-target/
const nextGreatestLetter = (letters: string[], target: string): string => {
  let left = 0;
  let right = letters.length - 1;
  let pivot = 0;
  while (left <= right) {
    pivot = Math.floor(left + (right - left) / 2);
    if (letters[pivot] <= target) left = pivot + 1;
    else right = pivot - 1;
  }
  return letters[left % letters.length];
};
