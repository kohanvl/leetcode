// Easy - https://leetcode.com/problems/happy-number/
const isHappy = (n: number): boolean => {
  let hashMap = {};
  while (true) {
    n = squareSum(n);
    if (n === 1) return true;
    else if (hashMap[n]) return false;
    else hashMap[n] = 1;
  }
};

const squareSum = (n: number): number => {
  let squareSum = 0;
  while (n) {
    const digit = n % 10;
    squareSum += digit * digit;
    n = Math.floor(n / 10);
  }
  return squareSum;
};
