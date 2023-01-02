/**
 * ya
 * Medium - https://leetcode.com/problems/interval-list-intersections/
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const ans = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    if (
      firstList[i][1] >= secondList[j][0] &&
      firstList[i][0] <= secondList[j][1]
    ) {
      // find intersection
      const low = Math.max(firstList[i][0], secondList[j][0]);
      const high = Math.min(firstList[i][1], secondList[j][1]);
      ans.push([low, high]);
    }
    // move pointer
    firstList[i][1] < secondList[j][1] ? i++ : j++;
  }
  return ans;
};
