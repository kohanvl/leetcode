// Medium - https://leetcode.com/problems/number-of-islands/
const numIslands = (grid: string[][]): number => {
  const rowsL = grid.length;
  if (!rowsL) return 0;
  const colsL = grid[0].length;
  let islands = 0;

  for (let r = 0; r < rowsL; r++) {
    for (let c = 0; c < colsL; c++) {
      if (grid[r][c] == '1') {
        islands++;
        bfs([[r, c]]);
      }
    }
  }
  return islands;

  function bfs(queue: number[][]) {
    while (queue.length) {
      let [row, col] = queue.shift();
      const isOutofBorders = row < 0 || row >= rowsL || col < 0 || col >= colsL;

      if (isOutofBorders || grid[row][col] == '0') continue;

      grid[row][col] = '0';

      queue.push([row + 1, col]);
      queue.push([row - 1, col]);
      queue.push([row, col + 1]);
      queue.push([row, col - 1]);
    }
  }
};
