/**
 * Medium - https://leetcode.com/problems/copy-list-with-random-pointer/
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

const copyRandomList = (head: Node | null): Node | null => {
  if (!head) return null;
  let copy = new Map();
  let node = head;
  while (node) {
    copy.set(node, new Node(node.val));
    node = node.next;
  }
  node = head;
  while (node) {
    copy.get(node).next = copy.get(node.next) || null;
    copy.get(node).random = copy.get(node.random) || null;
    node = node.next;
  }
  return copy.get(head);
};
