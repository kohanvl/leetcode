/**
 * Medium - https://leetcode.com/problems/reverse-linked-list-ii/
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

const reverseBetween = (
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null => {
  const dummy = new ListNode(0, head);

  // reach node at left
  let leftPrev = dummy;
  let cur = head;
  for (let i = 0; i < left - 1; i++) {
    leftPrev = cur;
    cur = cur.next;
  }

  // cur is 'left', leftPrev is 'node before left'
  // reverse from left to right
  let prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    let tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }

  // update pointers
  leftPrev.next.next = cur; // cur is node after 'right'
  leftPrev.next = prev; // prev is 'right'

  return dummy.next;
};
