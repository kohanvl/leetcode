// Easy - https://leetcode.com/problems/excel-sheet-column-number/
const titleToNumber = (columnTitle: string): number => {
  const len: number = columnTitle.length - 1;
  const MAX_TITLE_CODE: number = 26;
  const CHAR_CODE_DIFF: number = 64;
  let result: number = 0;

  for (let i = 0; i <= len; i++) {
    result +=
      Math.pow(MAX_TITLE_CODE, len - i) *
      (columnTitle.charCodeAt(i) - CHAR_CODE_DIFF);
  }

  return result;
};
