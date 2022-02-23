// Medium - https://leetcode.com/problems/permutation-in-string
// s1 = "ab", s2 = "eidbaooo" -> true
const checkInclusion = (s1: string, s2: string): boolean => {
  let s1Map = {};
  let s2Map = {};
  let left = 0;
  let right = 0;
  for (let i = 0; i < s1.length; i++) s1Map[s1[i]] = ++s1Map[s1[i]] || 1;
  while (right < s2.length) {
    s2Map[s2[right]] = ++s2Map[s2[right]] || 1;
    // Remove all letters that exceed our letter count by bumping up the left pointer
    while (s2Map[s2[right]] > (s1Map[s2[right]] || 0)) {
      s2Map[s2[left]]--;
      left++;
    }
    if (right - left + 1 === s1.length) return true;
    right++;
  }
  return false;
};
