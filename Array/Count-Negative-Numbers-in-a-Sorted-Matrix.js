/**
 * Easy - https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
  return grid.flat(2).filter((e) => e < 0).length;
};
