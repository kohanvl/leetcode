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
  // return dfsRecursive(root, []);
  return dfsIterative(root);
};

// const dfsRecursive = (node: TreeNode | null, res: number[]): number[] => {
//   if (!node) return [];
//   res.push(node.val);
//   if (node.left) dfsRecursive(node.left, res);
//   if (node.right) dfsRecursive(node.right, res);
//   return res;
// };

const dfsIterative = (node: TreeNode | null): number[] => {
  if (!node) return [];
  const res: number[] = [];
  const stack: TreeNode[] = [node];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      res.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
  return res;
};
