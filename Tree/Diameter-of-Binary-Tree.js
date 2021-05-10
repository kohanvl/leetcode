/**
 * Easy - https://leetcode.com/problems/diameter-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  if (!root) return null;
  const heightL = heightOfBinaryTree(root.left);
  const heightR = heightOfBinaryTree(root.right);
  const diameterL = diameterOfBinaryTree(root.left);
  const diameterR = diameterOfBinaryTree(root.right);
  return Math.max(heightL + heightR, Math.max(diameterL, diameterR));
};

const heightOfBinaryTree = (root) => {
  if (!root) return null;
  const heightL = heightOfBinaryTree(root.left);
  const heightR = heightOfBinaryTree(root.right);
  return Math.max(heightL, heightR) + 1;
};
