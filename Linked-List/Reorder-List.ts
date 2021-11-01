/**
 * Medium - https://leetcode.com/problems/reorder-list/
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

/**
 Do not return anything, modify head in-place instead.
 */

const reorderList = (head: ListNode | null): void => {
  // find middle
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let second = slow.next;
  let prev = null;
  let tmp = null;
  slow.next = null;
  while (second) {
    tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }

  // merge two halfs
  let first = head;
  second = prev;
  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};
