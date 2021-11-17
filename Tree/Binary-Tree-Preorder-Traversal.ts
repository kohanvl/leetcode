/**
 * Easy - https://leetcode.com/problems/binary-tree-preorder-traversal/
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

const preorderTraversal = (root: TreeNode | null): number[] => {
  // return preorderRecursive(root, []);
  return preorderIterative(root);
};

// const preorderRecursive = (node: TreeNode | null, res: number[]): number[] => {
//   if (!node) return [];
//   res.push(node.val);
//   if (node.left) dfsRecursive(node.left, res);
//   if (node.right) dfsRecursive(node.right, res);
//   return res;
// };

const preorderIterative = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      res.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  return res;
};
