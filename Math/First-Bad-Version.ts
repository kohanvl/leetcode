/**
 * Easy - https://leetcode.com/problems/first-bad-version/
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
