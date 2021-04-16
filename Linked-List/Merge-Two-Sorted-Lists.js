/**
 * Easy - https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
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
};
