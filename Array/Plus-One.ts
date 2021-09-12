// Easy - https://leetcode.com/problems/plus-one/
const plusOne = (digits: number[]): number[] => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};
