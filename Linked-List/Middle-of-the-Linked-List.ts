/**
 * Easy - https://leetcode.com/problems/middle-of-the-linked-list/
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

function middleNode(head: ListNode | null): ListNode | null {
  let node = head;
  let count = 0;

  while (node) {
    node = node.next;
    count++;
  }

  const middle = Math.floor(count / 2);
  count = 0;
  node = head;

  while (node) {
    if (count === middle) return node;
    node = node.next;
    count++;
  }

  return head;
}
