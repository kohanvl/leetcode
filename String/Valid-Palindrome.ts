/** ya
 * Easy - https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s: string): boolean {
  // remove all exept letters
  const str = s.split(/\W|_/).join('').toLowerCase();
  let left = 0;
  let right = str.length - 1;
  // use two ponters
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

/**
 * Aproach 1 - using build in operations
   function isPalindrome(s: string): boolean {
    const str = s.split(/\W|_/).join('').toLowerCase();
    const strReversed = str.split('').reverse().join('');
    return str === strReversed;
   };
 */
