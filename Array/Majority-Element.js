/**
 * Easy - https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]] + 1 : 1;
  }
  const max = Math.max(...Object.values(hashMap));
  for (const key in hashMap) {
    if (hashMap[key] === max) return key;
  }
};
