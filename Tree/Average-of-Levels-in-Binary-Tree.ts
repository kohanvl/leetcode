/**
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

const averageOfLevels = (root: TreeNode | null): number[] => {
  const result: number[] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      let node: TreeNode = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(sum / len);
  }
  return result;
};
