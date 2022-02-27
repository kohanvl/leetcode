// Medium - https://leetcode.com/problems/string-compression/
// ["a","a","b","b","c","c","c"] -> ["a","2","b","2","c","3"]
function compress(chars: string[]): number {
  if (!chars.length) return 0;
  let count = 0;
  let left = 0;
  let cur = 0;
  for (let right = 0; right <= chars.length; right++) {
    if (chars[cur] === chars[right]) count++;
    else {
      chars[left] = chars[cur];
      if (count > 1) {
        const strCount = count.toString();
        for (let i = 0; i < strCount.length; i++) chars[++left] = strCount[i];
      }
      left++;
      cur = right;
      count = 1;
    }
  }
  return left;
}
