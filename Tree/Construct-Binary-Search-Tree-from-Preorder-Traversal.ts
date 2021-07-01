/**
 * Medium - https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
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

const bstFromPreorder = (preorder: number[]): TreeNode | null => {
  return helper(preorder, Math.min(...preorder), Math.max(...preorder));
};

const helper = (
  preorder: number[],
  min: number,
  max: number,
): TreeNode | null => {
  if (preorder[0] > max || preorder[0] < min || !preorder.length) return null;

  const root = new TreeNode(preorder.shift());
  root.left = helper(preorder, min, root.val);
  root.right = helper(preorder, root.val, max);

  return root;
};
