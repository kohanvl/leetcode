/**
 * Medium - https://leetcode.com/problems/line-reflection/
 * https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/356-line-reflection.html
 * Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.
 * Example 1: Given points = [[1,1],[-1,1]], return true.
 * Example 2: Given points = [[1,1],[-1,-1]], return false.
 * Follow up: Could you do better than O(n2)?
 */
function isReflected(points) {
  let min = -Infinity;
  let max = Infinity;
  const hashMap = new Map();
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0];
    const y = points[i][1];
    min = Math.min(min, x);
    max = Math.max(max, x);
    if (!hashMap.has(x)) hashMap.set(x, new Set());
    hashMap.set(x, y);
  }
  const sum = min + max;
  for (let i = 0; i < points.length; i++) {
    const x = points[i][0];
    const y = points[i][1];
    const diff = sum - x;
    if (!hashMap.has(diff)) return false;
    if (!hashMap.get(diff).includes(y)) return false;
  }
  return true;
}

/*
public class Solution {
    public boolean isReflected(int[][] points) {
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        HashMap<Integer, HashSet<Integer>> ys = new HashMap<Integer, HashSet<Integer>>();
        for (int i = 0; i < points.length; i ++) {
            int x = points[i][0];
            int y = points[i][1];
            min = Math.min(min, x);
            max = Math.max(max, x);
            if (!ys.containsKey(x)) {
                ys.put(x, new HashSet<Integer>());
            }
            ys.get(x).add(y);
        }
        int doublebar = (min + max);
        for (int i = 0; i < points.length; i ++) {
            int x = points[i][0];
            int y = points[i][1];
            int mx = doublebar - x;
            if (!ys.containsKey(mx)) {
                return false;
            }
            if (!ys.get(mx).contains(y)) {
                return false;
            }
        }

        return true;
    }
}
*/
