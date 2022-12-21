// ya
// Medium - https://leetcode.com/problems/insert-delete-getrandom-o1/
// we need two data structure: map and array
var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
// O(1)
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  // add to map
  this.map.set(val, this.arr.length);
  // add to array
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
// O(1)
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const idx = this.map.get(val);
  const arrLen = this.arr.length;
  // swap current and last element in array
  [this.arr[idx], this.arr[arrLen - 1]] = [this.arr[arrLen - 1], this.arr[idx]];
  // remove from array: pop the last element
  this.arr.pop();
  this.map.set(this.arr[idx], idx);
  // remove from map
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
// O(1)
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
