/**
 * Hard - https://leetcode.com/problems/minimum-window-substring/submissions/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t === '') return '';
  const countT = {};
  const window = {};

  // fill countT of t string values
  for (let i = 0; i < t.length; i++) {
    countT[t[i]] = countT[t[i]] ? countT[t[i]] + 1 : 1;
  }

  let have = 0;
  let need = Object.keys(countT).length;

  let res = [-1, -1];
  let resLen = Infinity;
  let l = 0;

  // go from left to right
  for (let r = 0; r < s.length; r++) {
    // fill window map s string values
    window[s[r]] = window[s[r]] ? window[s[r]] + 1 : 1;
    // if current value in countT -> increment have
    if (countT[s[r]] && window[s[r]] === countT[s[r]]) have += 1;

    while (have === need) {
      // update our result
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      // pop from the left of window
      window[s[l]] -= 1;
      if (countT[s[l]] && window[s[l]] < countT[s[l]]) have -= 1;
      l++;
    }
  }
  let [left, right] = res;
  return resLen !== Infinity ? s.substring(left, right + 1) : '';
};
