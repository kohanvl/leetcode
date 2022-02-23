/* Medium - https://leetcode.com/problems/lru-cache/
  Input
  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
  [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
  Output
  [null, null, null, 1, null, -1, null, -1, 3, 4]
*/
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.hashTable = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.hashTable.has(key)) return -1;
  const val = this.hashTable.get(key);
  this.hashTable.delete(key);
  this.hashTable.set(key, val);
  return this.hashTable.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hashTable.has(key)) this.hashTable.delete(key);
  this.hashTable.set(key, value);
  if (this.hashTable.size > this.capacity)
    this.hashTable.delete(this.hashTable.keys().next().value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/* TS
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashTable = new Map();
  }

  get(key) {
    if (!this.hashTable.has(key)) return -1;

    const val = this.hashTable.get(key);
    this.hashTable.delete(key);
    this.hashTable.set(key, val);

    return this.hashTable.get(key);
  }

  put(key, value) {
    if (this.hashTable.has(key)) {
      this.hashTable.delete(key);
    }
    this.hashTable.set(key, value);

    if (this.hashTable.size > this.capacity) {
      this.hashTable.delete(this.hashTable.keys().next().value);
    }
  }
}
*/
