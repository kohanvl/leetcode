// ya
// Medium - https://leetcode.com/problems/merge-intervals/
// [[1,3],[2,6],[8,10],[15,18]]
const merge = (intervals: number[][]): number[][] => {
  // sort intervals by first val
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];
  for (let interval of intervals) {
    const lastRes = res[res.length - 1];
    if (!res.length || lastRes[1] < interval[0]) res.push(interval);
    else lastRes[1] = Math.max(lastRes[1], interval[1]);
    /*
    lastRes = undefined, interval =[ 1, 3 ]
    [ 1, 6 ] [ 2, 6 ]
    [ 1, 6 ] [ 8, 10 ]
    [ 8, 10 ] [ 15, 18 ]
    */
  }
  return res;
};
