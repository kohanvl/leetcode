/**
 * Medium - https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

const flatten = (head: Node | null): Node | null => {
  if (!head) return null;
  let node = head;

  while (node) {
    if (!node.child) {
      node = node.next;
      continue;
    }
    let child = node.child;

    while (child.next) child = child.next;

    child.next = node.next;
    if (node.next) node.next.prev = child;
    node.next = node.child;
    node.child.prev = node;
    node.child = null;
  }
  return head;
};
