/**
 * Easy - https://leetcode.com/problems/subtree-of-another-tree/
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

const isSubtree = (
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean => {
  if (!root) return false;
  else if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  else if (!p || !q) return false;
  else if (p.val !== q.val) return false;
  else return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
