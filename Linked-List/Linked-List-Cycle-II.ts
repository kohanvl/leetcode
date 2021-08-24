/**
 * Medium - https://leetcode.com/problems/linked-list-cycle-ii/
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

const detectCycle = (head: ListNode | null): ListNode | null => {
  let cycleNode = getCycleNode(head);
  if (!cycleNode) return null;

  while (cycleNode !== head) {
    head = head.next;
    cycleNode = cycleNode.next;
  }
  return head;
};

const getCycleNode = (head: ListNode | null): ListNode | null => {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return fast;
  }
  return null;
};
