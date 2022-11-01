/**
PREMIUM
Medium - https://leetcode.com/problems/line-reflection/

Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.
Example 1: Given points = [[1,1],[-1,1]], return true.
Example 2: Given points = [[1,1],[-1,-1]], return false.
Follow up: Could you do better than O(n2)?
*/

const isReflected = (points) => {
  let min = Infinity;
  let max = -Infinity;
  const map = new Map();
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0];
    const y = points[i][1];
    max = Math.max(max, x);
    min = Math.min(min, x);
    map.set(x, y);
  }
  const sum = min + max;
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0];
    const y = points[i][1];
    const sub = sum - x;
    if (map.get(sub) !== y) return false;
  }
  return true;
};

console.log(
  isReflected([
    [1, 1],
    [-1, 1],
  ]),
); // true
console.log(
  isReflected([
    [1, 1],
    [-1, -1],
  ]),
); // false
