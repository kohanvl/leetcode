// Easy - https://leetcode.com/problems/reverse-words-in-a-string-iii/
var reverseWords = function (s) {
  let res = '';
  let word = '';
  for (let cur of s) {
    // if cur === space
    if (cur === ' ') {
      res += word + cur;
      word = '';
    } else {
      word = cur + word;
    }
    console.log(cur, res, word);
  }
  return res + word;
};

// const reverseWords = (s: string): string => {
//   return s
//     .split(' ')
//     .map((word) => word.split('').reverse().join(''))
//     .join(' ');
// };
