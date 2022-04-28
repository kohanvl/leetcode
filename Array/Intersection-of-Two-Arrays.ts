// Easy - https://leetcode.com/problems/intersection-of-two-arrays/
function intersection(nums1: number[], nums2: number[]): number[] {
  let hashMap = {};
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    hashMap[nums1[i]] = true;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hashMap[nums2[i]]) {
      res.push(nums2[i]);
    }
  }
  return [...new Set(res)];
}
