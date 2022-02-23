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
 * 
  Input: lists = [[1,4,5],[1,3,4],[2,6]]
  Output: [1,1,2,3,4,4,5,6]
  Explanation: The linked-lists are:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  merging them into one sorted list:
  1->1->2->3->4->4->5->6
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
