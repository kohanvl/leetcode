/**
 * Medium - https://leetcode.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
// Pure JS
var reverseWords = function (s) {
  // remove extra spaces
  const sTrimmed = s.replace(/\s+/g, ' ').trim();
  const words = sTrimmed.split(' ');
  const wLen = words.length;
  // do reverse
  for (let i = 0; i < wLen / 2; i++) {
    const temp = words[i];
    words[i] = words[wLen - 1 - i];
    words[wLen - 1 - i] = temp;
  }
  return words.join(' ');
};

/* Build in methods
const reverseWords = (s: string): string => {
  return s
    .split(' ')
    .filter((w) => w !== '')
    .reverse()
    .join(' ');
};
*/
