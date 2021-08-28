/**
 * Easy - https://leetcode.com/problems/palindrome-linked-list/
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

const isPalindrome = (head: ListNode | null): boolean => {
  const stack: number[] = [];
  let node: ListNode | null = head;
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
