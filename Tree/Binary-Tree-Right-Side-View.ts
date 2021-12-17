/**
 * Medium - https://leetcode.com/problems/binary-tree-right-side-view/
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

const rightSideView = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const dfs = (node: TreeNode | null, curDepth: number): void => {
    if (!node) return;
    if (curDepth === res.length) res.push(node.val);
    dfs(node.right, curDepth + 1);
    dfs(node.left, curDepth + 1);
  };
  dfs(root, 0);
  return res;
};
