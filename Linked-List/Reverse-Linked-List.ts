/**
 * Easy - https://leetcode.com/problems/reverse-linked-list/
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

const reverseList = (head: ListNode | null): ListNode | null => {
  let node: ListNode | null = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = node ? node.next : null;
  while (node) {
    node.next = prev;
    prev = node;
    node = next;
    next = node ? node.next : null;
  }
  return prev;
};
