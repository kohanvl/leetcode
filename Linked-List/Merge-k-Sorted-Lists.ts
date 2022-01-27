/**
 * Hard - https://leetcode.com/problems/merge-k-sorted-lists/
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;
  while (lists.length > 1) {
    const mergedTwoLists = mergeTwoLists(lists.shift(), lists.shift());
    lists.push(mergedTwoLists);
  }
  return lists[0];
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const resultHead = new ListNode();
  let resultNode = resultHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      resultNode.next = l1;
      l1 = l1.next;
    } else {
      resultNode.next = l2;
      l2 = l2.next;
    }
    resultNode = resultNode.next;
  }
  resultNode.next = l1 || l2;
  return resultHead.next;
}
