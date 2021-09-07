/**
 * Easy - https://leetcode.com/problems/intersection-of-two-linked-lists/
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

const getIntersectionNode = (
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null => {
  if (headA === headB) return headA;
  const hashMap: Map<ListNode | null, number> = new Map();

  while (headA) {
    hashMap.set(headA, 1);
    headA = headA.next;
  }

  while (headB) {
    if (hashMap.get(headB)) return headB;
    headB = headB.next;
  }

  return null;
};
