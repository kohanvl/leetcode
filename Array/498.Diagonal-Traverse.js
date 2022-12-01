/**
 * Madium - https://leetcode.com/problems/diagonal-traverse/
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  if (mat.length === 0 || mat[0].length === 0) return 0;
  const rowL = mat.length;
  const colL = mat[0].length;
  const result = [];
  let row = 0;
  let col = 0;
  let goUp = true;

  while (row < rowL && col < colL) {
    // going up
    if (goUp) {
      while (row > 0 && col < colL - 1) {
        result.push(mat[row][col]);
        row--;
        col++;
      }
      // reach upper row
      result.push(mat[row][col]);
      // if it's last col
      if (col === colL - 1) row++;
      // if not
      else col++;
      // going down
    } else {
      while (col > 0 && row < rowL - 1) {
        result.push(mat[row][col]);
        row++;
        col--;
      }
      // reach upper row
      result.push(mat[row][col]);
      // if it's last row
      if (row === rowL - 1) col++;
      // if not
      else row++;
    }
    // change direction
    goUp = !goUp;
  }
  return result;
};
