// Medium - https://leetcode.com/problems/fruit-into-baskets/
function totalFruit(fruits: number[]): number {
  let l = 0;
  let busket = new Map();
  let max = -Infinity;
  for (let r = 0; r < fruits.length; r++) {
    busket.set(fruits[r], busket.get(fruits[r]) + 1 || 1);
    while (busket.size > 2) {
      if (busket.get(fruits[l]) - 1 === 0) busket.delete(fruits[l]);
      else busket.set(fruits[l], busket.get(fruits[l]) - 1);
      l++;
    }
    if (busket.size >= 1) max = Math.max(max, r + 1 - l);
  }
  return max;
}
