/**
 * Easy - https://leetcode.com/explore/learn/card/binary-search/125/template-i/951/
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

const guessNumber = (n: number): number => {
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const res = guess(mid);
    if (res === 0) return mid;
    else if (res < 0) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};
