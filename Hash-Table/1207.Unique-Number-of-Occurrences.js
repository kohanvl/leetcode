/** Easy - https://leetcode.com/problems/unique-number-of-occurrences/description/
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) hashMap[arr[i]]++;
    else hashMap[arr[i]] = 1;
  }

  const freq = Object.values(hashMap).sort();
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === freq[i + 1]) return false;
  }

  return true;
};

// Time: O(N + KlogK)
// Space: O(N)
