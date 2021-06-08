// Medium - https://leetcode.com/problems/minimum-path-sum/
const minPathSum = (grid: number[][]): number => {
  const n: number = grid.length;
  const m: number = grid[0].length;

  for (let i = 1; i < n; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < m; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }

  return grid[n - 1][m - 1];
};
