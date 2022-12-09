/**
 * Premium
 * Medium - https://leetcode.com/problems/count-univalue-subtrees/description/
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
var countUnivalSubtrees = function (root) {
  let count = 0;
  const isValidPart = (node, val) => {
    // considered a valid subtree
    if (node === null) return true;
    // check if node.left and node.right are univalue subtrees of value node.val
    // Bitwise OR: |
    if (!isValidPart(node.left, node.val) | !isValidPart(node.right, node.val))
      return false;
    count++;
    return node.val === val;
  };
  isValidPart(root, 0);
  return count;
};
