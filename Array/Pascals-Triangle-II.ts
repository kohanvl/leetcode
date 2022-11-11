//Easy - https://leetcode.com/problems/pascals-triangle-ii/
const getRow = (rowIndex: number): number[] => {
  const triangle = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    const row: number[] = [];
    row.push(1);
    for (let j = 0; j < triangle[i - 1].length - 1; j++) {
      row.push(triangle[i - 1][j] + triangle[i - 1][j + 1]);
    }
    triangle.push(row);
    row.push(1);
  }
  return triangle[rowIndex];
};
