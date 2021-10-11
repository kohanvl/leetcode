/**
 * Medium - https://leetcode.com/problems/set-matrix-zeroes/
 * Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix: number[][]): void => {
  let row_zero = false;
  let column_zero = false;

  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) row_zero = true;
  }

  for (let i = 0; i < columns; i++) {
    if (matrix[0][i] === 0) column_zero = true;
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (matrix[i][0] === 0 || matrix[0][j]) {
        matrix[i][j] = 0;
      }
    }
  }

  if (row_zero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  if (column_zero) {
    for (let i = 0; i < columns; i++) {
      matrix[0][i] = 0;
    }
  }
};
