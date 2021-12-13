// Medium - https://leetcode.com/problems/search-a-2d-matrix-ii/
const searchMatrix = (matrix: number[][], target: number): boolean => {
  const rows = matrix.length;
  let i = 0;
  let j = matrix[0].length - 1;

  while (i < rows && j >= 0) {
    const cell = matrix[i][j];
    if (target === cell) return true;
    if (target > cell) i++;
    else j--;
  }
  return false;
};
