/**
 * Easy - https://leetcode.com/problems/minimum-depth-of-binary-tree/
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

const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  const queue: TreeNode[] = [root];
  let depth = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node: TreeNode = queue.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  return depth;
};
