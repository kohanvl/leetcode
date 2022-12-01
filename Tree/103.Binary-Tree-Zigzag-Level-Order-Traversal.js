/** ya
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Use BFS
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  let deep = 0;
  while (queue.length) {
    const qLen = queue.length;
    const level = [];
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift();
      // check deep level and puhs or unshift to level arr
      if (deep % 2 === 0) level.push(node.val);
      else level.unshift(node.val);
      //check childs
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // push level arr to result arr
    result.push(level);
    deep++;
  }
  return result;
};
