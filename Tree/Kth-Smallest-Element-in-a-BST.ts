/**
 * Medium - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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

const kthSmallest = (root: TreeNode | null, k: number): number => {
  const arr = dfs(root);
  return arr[k - 1];
};

const dfs = (root: TreeNode | null, arr: number[] = []): number[] => {
  if (!root) return arr;
  dfs(root.left, arr);
  arr.push(root.val);
  dfs(root.right, arr);
  return arr;
};
