// ya
// Medium - https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;
  // use two pointers
  let slow = 0;
  let fast = 0;
  let maxSubstring = 0;
  const set = new Set();
  while (slow < s.length) {
    // fill set if it's empty with fast pointer values
    if (!set.has(s[fast]) && fast < s.length) {
      set.add(s[fast]);
      // find max
      maxSubstring = Math.max(maxSubstring, set.size);
      fast++;
    } else {
      // if char repeate - remove it
      set.delete(s[slow]);
      slow++;
    }
  }
  return maxSubstring;
}
