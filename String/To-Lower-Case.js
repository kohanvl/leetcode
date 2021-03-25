/**
 * Easy - https://leetcode.com/problems/to-lower-case/
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  const codeUpperCaseMin = 65;
  const codeUpperCaseMax = 90;
  const codeUpperToLowerCase = 32;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt();
    if (charCode >= codeUpperCaseMin && charCode <= codeUpperCaseMax) {
      result += String.fromCharCode(charCode + codeUpperToLowerCase);
    } else {
      result += str[i];
    }
  }
  return result;
};
