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
  // return inorderRecursive(root, []);
  return inorderIterative(root);
};

// const inorderRecursive = (node: TreeNode | null, res: number[]): number[] => {
//   if (!node) return [];
//   if (node.left) dfsRecursive(node.left, res);
//   res.push(node.val);
//   if (node.right) dfsRecursive(node.right, res);
//   return res;
// };

const inorderIterative = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    res.push(node.val);
    node = node.right;
  }
  return res;
};
