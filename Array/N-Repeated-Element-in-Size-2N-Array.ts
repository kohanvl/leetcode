// Easy - https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
function repeatedNTimes(nums: number[]): number {
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]) return nums[i];
    }
};
