// Medium - https://leetcode.com/problems/subarray-sum-equals-k
// nums = [1,2,3], k = 3 -> 1 + 2 && 3 -> 2
// Time - O(n)
const subarraySum = (nums: number[], k: number): number => {
  const hashMap: {[key: number]: number} = {0: 1};
  let count: number = 0;
  let sum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (hashMap[sum - k]) count += hashMap[sum - k];
    hashMap[sum] = hashMap[sum] + 1 || 1;
  }

  return count;
};

/* Time - O(n^2)
const subarraySum = (nums: number[], k: number): number => {
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum: number = 0;
    sum += nums[i];

    if (sum === k) count++;

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  return count;
};
*/
