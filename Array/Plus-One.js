/**
 * Easy - https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === 0 && digits[i] === 9) {
      digits[i] = 0;
      digits.unshift(1);
    } else if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  return digits;
};
