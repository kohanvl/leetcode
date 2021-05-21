//Easy - https://leetcode.com/problems/last-stone-weight/
const lastStoneWeight = (stones: number[]): number => {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const max1 = stones.pop();
    const max2 = stones.pop();
    if (max1 !== max2) stones.push(max1 - max2);
  }
  return stones[0] || 0;
};
