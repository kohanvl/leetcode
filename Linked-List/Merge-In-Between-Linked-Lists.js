/**
 * Medium - https://leetcode.com/problems/merge-in-between-linked-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = (list1, a, b, list2) => {
  let i = 0;
  let start, end;
  let node1 = list1;
  let node2 = list2;

  while (node1) {
    if (i === a - 1) start = node1;
    if (i === b + 1) end = node1;
    node1 = node1.next;
    i++;
  }

  while (node2 && node2.next) {
    node2 = node2.next;
  }

  start.next = list2;
  node2.next = end;

  return list1;
};
