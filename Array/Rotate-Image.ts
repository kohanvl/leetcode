/**
 * Medium - https://leetcode.com/problems/rotate-image/
 * Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]): void => {
  const len = matrix.length;
  // transpose
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  // reflect
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][len - j - 1];
      matrix[i][len - j - 1] = temp;
    }
  }
};
