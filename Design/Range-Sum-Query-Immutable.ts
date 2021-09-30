// Easy - https://leetcode.com/problems/range-sum-query-immutable/
class NumArray {
  arr = [];
  sum = 0;

  constructor(nums: number[]) {
    this.arr = [...nums];
  }

  sumRange(left: number, right: number): number {
    this.sum = 0;
    for (let i = left; i <= right; i++) {
      this.sum += this.arr[i];
    }
    return this.sum;
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
