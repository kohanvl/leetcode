/**
 * Easy - https://leetcode.com/problems/search-in-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  if (!root) return null;
  else if (root.val === val) return root;
  else if (root.val > val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
