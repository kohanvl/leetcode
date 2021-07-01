// Easy - https://leetcode.com/problems/palindrome-number/
const isPalindrome = (x: number): boolean => {
  let num: number = x;
  let rev: number = 0;
  while (num > 0) {
    let last: number = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  return x === rev;
};
