/**
 * Easy - https://leetcode.com/problems/binary-tree-postorder-traversal/
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

const postorderTraversal = (root: TreeNode | null): number[] => {
  //   return postorderRecursive(root, []);
  return postorderIterative(root);
};

// const postorderRecursive = (node: TreeNode | null, res: number[]): number[] => {
//   if (!node) return [];
//   if (node.left) postorderRecursive(node.left, res);
//   if (node.right) postorderRecursive(node.right, res);
//   res.push(node.val);
//   return res;
// };

const postorderIterative = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      res.unshift(node.val);
      node = node.right;
    }
    node = stack.pop();
    node = node.left;
  }
  return res;
};
