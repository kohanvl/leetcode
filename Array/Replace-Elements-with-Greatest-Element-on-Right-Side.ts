// Easy - https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
function replaceElements(arr: number[]): number[] {
  const lastIdx = arr.length - 1;
  let max = -1;

  for (let i = lastIdx; i >= 0; i--) {
    const temp = arr[i];
    arr[i] = max;
    max = Math.max(arr[i], temp);
  }
  return arr;
}
