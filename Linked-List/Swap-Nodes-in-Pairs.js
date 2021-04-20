/**
 * Medium - https://leetcode.com/problems/swap-nodes-in-pairs/
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
const swapPairs = (head) => {
  let node = head;
  while (node && node.next) {
    let tempVal = node.val;
    node.val = node.next.val;
    node.next.val = tempVal;
    node = node.next.next;
  }
  return head;
};
