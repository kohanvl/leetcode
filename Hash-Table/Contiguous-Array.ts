// Medium - https://leetcode.com/problems/contiguous-array/
const findMaxLength = (nums: number[]): number => {
  const hashMap: {[key: string]: number} = {0: -1};
  let sum: number = 0;
  let maxLen: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (typeof hashMap[sum] === 'undefined') {
      hashMap[sum] = i;
    } else {
      maxLen = Math.max(maxLen, i - hashMap[sum]);
    }
  }

  return maxLen;
};
