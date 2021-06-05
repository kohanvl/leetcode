/**
 * Medium - https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const hashMap = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = hashMap[nums[i]] ? ++hashMap[nums[i]] : 1;
  }

  const sorted = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }

  return result;
};
