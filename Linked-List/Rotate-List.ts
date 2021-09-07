/**
 * Medium - https://leetcode.com/problems/rotate-list/
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

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head || !head.next) return head;
  let dummy = new ListNode();
  let fast = dummy;
  let slow = dummy;
  let len = 0;
  dummy.next = head;
  while (fast.next) {
    fast = fast.next;
    len++;
  }
  let idx = len - (k % len);
  for (let i = 0; i < idx; i++) {
    slow = slow.next;
  }
  fast.next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;
  return dummy.next;
};
