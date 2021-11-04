// Medium - https://leetcode.com/problems/3sum/
const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    const num = nums[i];

    while (left < right) {
      const threeSum = num + nums[left] + nums[right];
      if (threeSum > 0) right--;
      else if (threeSum < 0) left++;
      else {
        result.push([num, nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }
  return result;
};
