/**
 * Easy - https://leetcode.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  const hashTable = {};
  let count = 0;

  for (let i = 0; i < jewels.length; i++) {
    hashTable[jewels[i]] = 0;
  }

  for (let i = 0; i < stones.length; i++) {
    const jewel = hashTable[stones[i]];
    if (jewel >= 0) hashTable[stones[i]] = jewel + 1;
  }

  for (let prop in hashTable) {
    count += hashTable[prop];
  }

  return count;
};
