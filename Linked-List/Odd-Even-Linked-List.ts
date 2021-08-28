/**
 * Medium - https://leetcode.com/problems/odd-even-linked-list/
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

const oddEvenList = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let odd: ListNode | null = head;
  let even: ListNode | null = head.next;
  let evenHead: ListNode | null = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
};
