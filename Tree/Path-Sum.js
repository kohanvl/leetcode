/**
 * Easy - https://leetcode.com/problems/path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  const newTargetSum = targetSum - root.val;
  const left = root.left;
  const right = root.right;
  
  if (!left && !right && newTargetSum === 0) return true;

  return hasPathSum(left, newTargetSum) || hasPathSum(right, newTargetSum);
};
