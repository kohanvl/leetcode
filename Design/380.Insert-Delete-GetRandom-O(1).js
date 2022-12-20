// ya
// Medium - https://leetcode.com/problems/insert-delete-getrandom-o1/
var RandomizedSet = function () {
  this.set = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  this.set.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const len = this.set.length;
  this.set.filter((e) => e !== val);
  console.log(this.set);
  if (len === this.set.length) return false;
  else return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return Math.random(...this.set);
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
