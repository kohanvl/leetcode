// ya
//Easy - https://leetcode.com/problems/valid-parentheses/
// "()[]{}" -> true
const isValid = (s: string): boolean => {
  const parenthesesMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [s[0]];
  let stackIndex = 0;

  for (let i = 1; i < s.length; i++) {
    // expected close bracket
    const closeParentheses = parenthesesMap[stack[stackIndex]];
    if (closeParentheses === s[i]) {
      if (stackIndex > 0) stackIndex--;
      stack.pop();
    } else {
      // if stack.len not empty
      if (stack.length) stackIndex++;
      stack.push(s[i]);
    }
  }

  return !stack.length;
};
