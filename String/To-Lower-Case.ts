// Easy - https://leetcode.com/problems/to-lower-case/
const toLowerCase = (s: string): string => {
  const codeUpperCaseMin = 65;
  const codeUpperCaseMax = 90;
  const codeUpperToLowerCase = 32;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0);
    if (charCode >= codeUpperCaseMin && charCode <= codeUpperCaseMax) {
      result += String.fromCharCode(charCode + codeUpperToLowerCase);
    } else {
      result += s[i];
    }
  }
  return result;
};
