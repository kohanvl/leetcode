/**
 * Medium - https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const connect = (root: Node | null): Node | null => {
  if (!root) return null;
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    const tempQueue = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      node.next = queue[0] || null;
      if (node.left) tempQueue.push(node.left);
      if (node.right) tempQueue.push(node.right);
    }
    queue.push(...tempQueue);
  }
  return root;
};
