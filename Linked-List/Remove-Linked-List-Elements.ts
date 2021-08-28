/**
 * Easy - https://leetcode.com/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const removeElements = (
  head: ListNode | null,
  val: number,
): ListNode | null => {
  let prev: ListNode | null = null;
  let node: ListNode | null = head;
  let next: ListNode | null = node ? node.next : null;
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
