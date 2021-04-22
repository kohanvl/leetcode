/**
 * Easy - https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let node = head;
  let prev = null;
  let next = node ? node.next : null;
  while (node) {
    node.next = prev;
    prev = node;
    node = next;
    next = node ? node.next : null;
  }
  return prev;
};
