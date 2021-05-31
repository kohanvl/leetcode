// Easy - https://leetcode.com/problems/sqrtx/
const mySqrt = (x: number): number => {
  let sqrt = 1;
  while (sqrt * sqrt <= x) sqrt++;
  return sqrt - 1;
};
