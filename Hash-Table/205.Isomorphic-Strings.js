/**
 * Easy - https://leetcode.com/problems/isomorphic-strings/description/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    // Compare the maps, if not equal, return false
    if (sMap[s[i]] !== tMap[t[i]]) return false;
    // Insert each character if string s and t into seperate map
    sMap[s[i]] = i + 1;
    tMap[t[i]] = i + 1;
  }
  return true;
};
