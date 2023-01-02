/**
 * Medium (Premium) - https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/submissions/
 * Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  // if list in null
  if (!head) {
    const newNode = new Node(insertVal);
    newNode.next = newNode;
    return newNode;
  }
  let node = head;
  while (node.next !== head) {
    // if cur < next - normal order
    if (node.val <= node.next.val) {
      if (insertVal >= node.val && insertVal <= node.next.val) break;
      // end of the list
    } else {
      if (insertVal >= node.val || insertVal <= node.next.val) break;
    }
    node = node.next;
  }
  let next = node.next;
  node.next = new Node(insertVal, next);
  return head;
};
