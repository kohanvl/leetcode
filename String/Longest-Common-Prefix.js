/**
 * Easy - https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let prefix = '';
  let checkWord = strs[0];

  for (let i = 0; i < checkWord.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      let nextWord = strs[j];
      if (checkWord[i] !== nextWord[i]) return prefix;
      else if (checkWord[i] === nextWord[i] && j === strs.length - 1)
        prefix += checkWord[i];
    }
  }

  return prefix;
};
