// Easy - https://leetcode.com/problems/backspace-string-compare/
const backspaceCompare = (s: string, t: string): boolean => {
  return modifyString(s) === modifyString(t);
};

const modifyString = (string: string): string => {
  const stack: string[] = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '#') {
      stack.push(string[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
};
