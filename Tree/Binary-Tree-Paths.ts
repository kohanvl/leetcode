/**
 * Easy - https://leetcode.com/problems/binary-tree-paths/
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

const binaryTreePaths = (root: TreeNode | null): string[] => {
  const paths: string[] = [];
  const dfs = (node: TreeNode | null, path: string) => {
    path += node.val;
    if (!node.left && !node.right) paths.push(path);
    if (node.left) dfs(node.left, path + '->');
    if (node.right) dfs(node.right, path + '->');
  };
  dfs(root, '');
  return paths;
};
