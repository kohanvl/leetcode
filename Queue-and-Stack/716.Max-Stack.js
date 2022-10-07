/*
PREMIUM
Hard - https://leetcode.com/problems/max-stack/

Design a max stack that supports push, pop, top, peekMax and popMax.

push(x) -- Push element x onto stack.
pop() -- Remove the element on top of the stack and return it.
top() -- Get the element on the top.
peekMax() -- Retrieve the maximum element in the stack.
popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.
Example 1:

MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5
Note: -1e7 <= x <= 1e7 Number of operations won't exceed 10000. The last four operations won't be called when stack is empty.
*/

var MaxStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MaxStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MaxStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  return Math.max(...this.stack);
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  const max = Math.max(...this.stack);
  for (let i = stack.length - 1; i >= 0; i--) {
    if (this.stack[i] === max) {
      return this.stack.splice(i, 1);
    }
  }
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 */
