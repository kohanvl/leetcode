/**
 * Easy - https://leetcode.com/problems/intersection-of-two-linked-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (headA === headB) return headA;
  const hashMap = new Map();

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
