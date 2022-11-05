/**
 * Easy - https://leetcode.com/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// Balanced tree is a tree with height Math.abs(left - right) <= 1
var isBalanced = function (root) {
  let result = true;
  function dfs(node) {
    if (!node) return 0;
    // go left
    const left = dfs(node.left);
    // go right
    const right = dfs(node.right);
    // check balance
    if (Math.abs(left - right) > 1) result = false;
    // return max height
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return result;
};
