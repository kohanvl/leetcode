/**
 * Easy - https://leetcode.com/problems/middle-of-the-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let node = head;
  let count = 0;

  while (node) {
    node = node.next;
    count++;
  }

  const middle = Math.floor(count / 2);
  count = 0;
  node = head;

  while (node) {
    if (count === middle) return node;
    node = node.next;
    count++;
  }

  return head;
};
