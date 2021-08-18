// Easy - https://leetcode.com/problems/valid-mountain-array/
function validMountainArray(arr: number[]): boolean {
  const len = arr.length;
  let i = 0;

  while (i + 1 < len && arr[i] < arr[i + 1]) i++;

  if (i === 0 || i === len - 1) return false;

  while (i + 1 < len && arr[i] > arr[i + 1]) i++;

  return i === len - 1;
}
