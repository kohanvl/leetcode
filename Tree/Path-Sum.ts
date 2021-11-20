/**
 * Easy - https://leetcode.com/problems/path-sum/
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) return false;

  const newTargetSum = targetSum - root.val;
  const left = root.left;
  const right = root.right;

  if (!left && !right && newTargetSum === 0) return true;

  return hasPathSum(left, newTargetSum) || hasPathSum(right, newTargetSum);
};
