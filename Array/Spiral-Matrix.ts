// Medium - https://leetcode.com/problems/spiral-matrix/
const spiralOrder = (matrix: number[][]): number[] => {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let direction = 0;
  const result: number[] = [];

  while (top <= bottom && left <= right) {
    if (direction === 0) {
      for (let i = left; i < right + 1; i++) {
        result.push(matrix[top][i]);
      }
      top += 1;
      direction = 1;
    } else if (direction === 1) {
      for (let i = top; i < bottom + 1; i++) {
        result.push(matrix[i][right]);
      }
      right -= 1;
      direction = 2;
    } else if (direction === 2) {
      for (let i = right; i > left - 1; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
      direction = 3;
    } else if (direction === 3) {
      for (let i = bottom; i > top - 1; i--) {
        result.push(matrix[i][left]);
      }
      left += 1;
      direction = 0;
    }
  }

  return result;
};
