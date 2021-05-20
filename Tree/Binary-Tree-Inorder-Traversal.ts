/**
 * Easy - https://leetcode.com/problems/binary-tree-inorder-traversal/
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

const inorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const left: number[] = inorderTraversal(root.left);
  const right: number[] = inorderTraversal(root.right);
  return [...left, root.val, ...right];
};
