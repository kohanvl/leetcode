/** ya
PREMIUM
Medium - https://leetcode.com/problems/line-reflection/

Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.
Example 1: Given points = [[1,1],[-1,1]], return true.
Example 2: Given points = [[1,1],[-1,-1]], return false.
Follow up: Could you do better than O(n2)?
*/

const isReflected = (points) => {
  let minX = Infinity;
  let maxX = -Infinity;
  const map = {};
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0];
    const y = points[i][1];
    // set max and min X
    maxX = Math.max(maxX, x);
    minX = Math.min(minX, x);
    // fill map
    if (!map[x]) map[x] = {};
    map[x][y] = true;
  }
  // find avg of X
  const avgX = (minX + maxX) / 2;
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0];
    const y = points[i][1];
    // for each point X find x2
    const x2 = 2 * avgX - x;
    // if there is no same x2 in map - return false
    if (!map[x2] || !map[x2][y]) return false;
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
console.log(
  isReflected([
    [1, 2],
    [2, 2],
    [1, 4],
    [2, 4],
  ]),
); // true
