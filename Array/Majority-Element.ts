// Easy - https://leetcode.com/problems/majority-element/
const majorityElement = (nums: number[]): number => {
  const hashMap: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]] + 1 : 1;
  }
  const max: number = Math.max(...Object.values(hashMap));
  for (const key in hashMap) {
    if (hashMap[key] === max) return +key;
  }
};
                                  
