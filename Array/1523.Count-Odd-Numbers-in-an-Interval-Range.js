/** Easy - https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let countOfOddNumbers = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) countOfOddNumbers++;
  }
  return countOfOddNumbers;
};

// Time: O(n)
// Space: O(n)
