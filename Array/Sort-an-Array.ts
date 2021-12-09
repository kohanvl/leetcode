// Medium - https://leetcode.com/problems/sort-an-array/
const sortArray = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));

  const merge = (left: number[], right: number[]): number[] => {
    const res: number[] = [];
    let left_index = 0;
    let right_index = 0;
    while (left_index < left.length && right_index < right.length) {
      if (left[left_index] < right[right_index]) {
        res.push(left[left_index]);
        left_index++;
      } else {
        res.push(right[right_index]);
        right_index++;
      }
    }
    res.push(...left.slice(left_index));
    res.push(...right.slice(right_index));
    return res;
  };
  return merge(left, right);
};
