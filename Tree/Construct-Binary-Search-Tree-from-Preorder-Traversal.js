/**
 * Medium - https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    const root = new TreeNode(preorder[0]);
    let right;
    for (let i = 1; i < preorder.length; i++) {
        if(root.val < preorder[i]) right = new TreeNode(preorder[i])
    }

};