// ya
// Easy - https://leetcode.com/problems/reverse-words-in-a-string-iii/
var reverseWords = function (s) {
  let res = '';
  let word = '';
  for (let cur of s) {
    // if cur === space
    if (cur === ' ') {
      // add reverse words
      res += word + cur;
      word = '';
    } else {
      // add reverse letters
      word = cur + word;
    }
  }
  return res + word;
};

// const reverseWords = (s: string): string => {
//   return s
//     .split(' ')
//     .map((word) => word.split('').reverse().join(''))
//     .join(' ');
// };
