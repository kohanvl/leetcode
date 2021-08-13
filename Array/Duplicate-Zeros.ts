/** 
 Easy - https://leetcode.com/problems/duplicate-zeros/
 Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = (arr: number[]): void => {
  const len: number = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      i++;
    }
  }
  arr.length = len;
};
