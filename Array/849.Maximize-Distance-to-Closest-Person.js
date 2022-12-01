/** ya
 * Medium - https://leetcode.com/problems/maximize-distance-to-closest-person/solution/
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const len = seats.length;
  const left = Array(len).fill(len);
  const right = Array(len).fill(len);
  let ans = 0;
  // fill left arr from left by distance
  for (let i = 0; i < len; i++) {
    if (seats[i] === 1) left[i] = 0;
    else if (i > 0) left[i] = left[i - 1] + 1;
  }
  // fill right arr from right by distance
  for (let i = len - 1; i >= 0; i--) {
    if (seats[i] === 1) right[i] = 0;
    else if (i < len - 1) right[i] = right[i + 1] + 1;
  }
  // check max in min distance
  for (let i = 0; i < len; i++) {
    ans = Math.max(ans, Math.min(left[i], right[i]));
  }
  return ans;
};
