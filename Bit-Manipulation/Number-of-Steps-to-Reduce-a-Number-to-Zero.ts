// Easy - https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
const numberOfSteps = (num: number): number => {
  let count: number = 0;
  while (num > 0) {
    num = num % 2 ? num - 1 : num / 2;
    count++;
  }
  return count;
};
