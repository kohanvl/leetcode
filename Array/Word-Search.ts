// Medium - https://leetcode.com/problems/word-search/
const exist = (board: string[][], word: string): boolean => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && traverse(board, i, j, word)) return true;
    }
  }
  return false;
};

const traverse = (
  board: string[][],
  i: number,
  j: number,
  word: string,
): boolean => {
  if (!word.length) return true;

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] !== word[0]
  )
    return false;

  let match = false;
  const originalVal = board[i][j];
  board[i][j] = '*';
  word = word.substr(1);

  match =
    traverse(board, i + 1, j, word) ||
    traverse(board, i - 1, j, word) ||
    traverse(board, i, j + 1, word) ||
    traverse(board, i, j - 1, word);

  board[i][j] = originalVal;

  return match;
};
