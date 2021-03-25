/**
 * Medium - https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
  if (s.length === 1) return 1;

  let slow = 0;
  let fast = 0;
  let maxSubstring = 0;
  const set = new Set();

  while (slow < s.length) {
    if (!set.has(s[fast]) && fast < s.length) {
      set.add(s[fast]);
      maxSubstring = Math.max(maxSubstring, set.size);
      fast++;
    } else {
      set.delete(s[slow]);
      slow++;
    }
  }

  return maxSubstring;
};
