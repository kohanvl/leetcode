// Medium - https://leetcode.com/problems/longest-repeating-character-replacement/
const characterReplacement = (s: string, k: number): number => {
  const hashMap = {};
  let l = 0;
  let res = 0;
  let max = 0;
  for (let r = 0; r < s.length; r++) {
    hashMap[s[r]] = hashMap[s[r]] ? hashMap[s[r]] + 1 : 1;
    max = Math.max(max, hashMap[s[r]]);
    if (r - l + 1 - max > k) {
      hashMap[s[l]] -= 1;
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
