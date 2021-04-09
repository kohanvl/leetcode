/**
 * Easy - https://leetcode.com/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  let prev = null;
  let node = head;
  let next = node ? node.next : null;
  while (node) {
    if (node.val === val) {
      prev ? (prev.next = next) : (head = next);
    } else {
      prev = node;
    }
    node = next;
    next = node ? node.next : null;
  }
  return head;
};
