/**
 * Easy - https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  const stack = [];
  let node = head;
  while (node) {
    stack.push(node.val);
    node = node.next;
  }
  node = head;
  while (node) {
    if (node.val !== stack.pop()) return false;
    node = node.next;
  }
  return true;
};
