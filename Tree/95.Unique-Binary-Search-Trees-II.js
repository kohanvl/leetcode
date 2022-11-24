/**
 * Medium - https://leetcode.com/problems/unique-binary-search-trees-ii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  function findTrees(start, end) {
    const ans = [];
    // base case
    if (start > end) {
      ans.push(null);
      return ans;
    }
    if (start === end) {
      ans.push(new TreeNode(start));
      return ans;
    }
    // main cycle
    for (let i = start; i <= end; i++) {
      // find all leftSubTrees and rightSubTrees
      const leftSubTrees = findTrees(start, i - 1);
      const rightSubTrees = findTrees(i + 1, end);
      // constract answer
      for (const leftSubTree of leftSubTrees) {
        for (const rightSubTree of rightSubTrees) {
          const root = new TreeNode(i);
          root.left = leftSubTree;
          root.right = rightSubTree;
          ans.push(root);
        }
      }
    }
    return ans;
  }
  return findTrees(1, n);
};
