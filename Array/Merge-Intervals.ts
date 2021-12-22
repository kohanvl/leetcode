// Medium - https://leetcode.com/problems/merge-intervals/
const merge = (intervals: number[][]): number[][] => {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];
  for (let interval of intervals) {
    const lastRes = res[res.length - 1];
    if (!res.length || lastRes[1] < interval[0]) res.push(interval);
    else lastRes[1] = Math.max(lastRes[1], interval[1]);
  }
  return res;
};
