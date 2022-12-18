/** ya
PREMIUM
Medium - https://leetcode.com/problems/one-edit-distance/

Given two strings s and t, determine if they are both one edit distance apart.

Note: 
There are 3 possiblities to satisify one edit distance apart:
Insert a character into s to get t
Delete a character from s to get t
Replace a character of s to get t

Example:
Input: s = "ab", t = "acb"
Output: true
*/

const isOneEditDistance = (s, t) => {
  const sLen = s.length + 1;
  const tLen = t.length + 1;
  // two poiners
  let i = 0;
  let j = 0;
  let count = 0;
  // if len more then 1 of each
  if (Math.abs(sLen - tLen) > 1) return false;
  while (i < sLen && j < tLen) {
    if (s[i] !== t[j]) {
      // if more then one changes will need -> return false
      if (count === 1) return false;
      else if (sLen > tLen) i++;
      else if (sLen < tLen) j++;
      else {
        i++;
        j++;
      }
      count++;
    } else {
      i++;
      j++;
    }
  }
  if (i < sLen && j < tLen) count++;
  return count === 1;
};

console.log(isOneEditDistance('ab', 'acb')); // true
console.log(isOneEditDistance('fa', 'a')); // true
console.log(isOneEditDistance('1203', '1213')); // true
console.log(isOneEditDistance('cab', 'ad')); // false
console.log(isOneEditDistance('aa', 'aa')); //false
console.log(isOneEditDistance('', '')); //false
console.log(isOneEditDistance('a', '')); //true
