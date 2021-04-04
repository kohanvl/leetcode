/**
 * Easy - https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [];
    row.push(1);
    for (let j = 0; j < triangle[i - 1].length - 1; j++) {
      row.push(triangle[i - 1][j] + triangle[i - 1][j + 1]);
    }
    triangle.push(row);
    row.push(1);
  }
  return triangle;
};
