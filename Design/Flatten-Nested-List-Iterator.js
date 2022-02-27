/**
 * Medium - https://leetcode.com/problems/flatten-nested-list-iterator/
 * This is the interface that allows for creating nested lists.
 * You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
class NestedIterator {
  constructor(nestedList) {
    this.data = [];
    this.flatten(nestedList);
  }

  flatten(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].isInteger()) this.data.push(list[i].getInteger());
      else this.flatten(list[i].getList());
    }
  }

  hasNext() {
    return this.data.length;
  }

  next() {
    return this.data.shift();
  }
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
