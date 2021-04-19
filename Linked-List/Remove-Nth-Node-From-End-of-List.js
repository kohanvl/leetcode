/**
 * Medium - https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let node = head;
  let len = 0;
  while (node) {
    len++;
    node = node.next;
  }
  let indexDelNode = len - n;

  if (indexDelNode === 0) return head.next;

  let index = 0;
  node = head;
  while (node) {
    if (index + 1 === indexDelNode) {
      node.next = node.next.next;
    }
    index++;
    node = node.next;
  }
  return head;
};
