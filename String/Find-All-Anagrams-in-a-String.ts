// ya
// Medium - https://leetcode.com/problems/find-all-anagrams-in-a-string/
function findAnagrams(s: string, p: string): number[] {
  const res: number[] = [];
  const hashMap = {};
  let count = p.length;
  let l = 0;
  let r = 0;
  // fill map by p srting
  for (let i = 0; i < p.length; i++) {
    hashMap[p[i]] = hashMap[p[i]] ? hashMap[p[i]] + 1 : 1;
  }
  while (r < s.length) {
    // check map with s string
    if (hashMap[s[r]] > 0) count--;
    hashMap[s[r]]--;
    r++;
    if (count === 0) res.push(l);
    if (r - l === p.length) {
      if (hashMap[s[l]] >= 0) count++;
      hashMap[s[l]]++;
      l++;
    }
  }
  return res;
}
