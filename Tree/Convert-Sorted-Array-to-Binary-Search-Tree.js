/**
 * Easy - https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  const rootIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[rootIndex]);
  root.left = sortedArrayToBST(nums.slice(0, rootIndex));
  root.right = sortedArrayToBST(nums.slice(rootIndex + 1, nums.length));

  return root;
};
