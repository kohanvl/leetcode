/**
 * Easy - https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const hashMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [s[0]];
  let stackIndex = 0;

  for (let i = 1; i < s.length; i++) {
    if (hashMap[stack[stackIndex]] === s[i]) {
      if (stackIndex > 0) stackIndex--;
      stack.pop();
    } else {
      if (!!stack.length) stackIndex++;
      stack.push(s[i]);
    }
  }

  return !stack.length;
};
