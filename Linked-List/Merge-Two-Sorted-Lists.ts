/** ya
 * Easy - https://leetcode.com/problems/merge-two-sorted-lists/
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

const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  // create result list
  const resultHead = new ListNode();
  let resultNode = resultHead;

  while (l1 && l2) {
    // if l1 < l2
    if (l1.val < l2.val) {
      resultNode.next = l1;
      l1 = l1.next;
    }
    //if l1 > l2
    else {
      resultNode.next = l2;
      l2 = l2.next;
    }
    resultNode = resultNode.next;
  }
  // add rest
  resultNode.next = l1 || l2;

  return resultHead.next;
};
