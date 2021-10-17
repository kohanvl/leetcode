/**
 * Medium - https://leetcode.com/problems/swap-nodes-in-pairs/
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

const swapPairs = (head: ListNode | null): ListNode | null => {
  let node = head;
  while (node && node.next) {
    let tempVal = node.val;
    node.val = node.next.val;
    node.next.val = tempVal;
    node = node.next.next;
  }
  return head;
};
