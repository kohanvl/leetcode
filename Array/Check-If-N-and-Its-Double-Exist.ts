// Easy - https://leetcode.com/problems/check-if-n-and-its-double-exist/
function checkIfExist(arr: number[]): boolean {
  if (!arr) return false;

  const hashTable = {};
  for (let num of arr) {
    if (hashTable[num * 2] || hashTable[num / 2]) return true;
    else hashTable[num] = true;
  }
  return false;
}
