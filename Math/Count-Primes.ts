// Easy - https://leetcode.com/problems/count-primes/
const countPrimes = (n: number): number => {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
};

const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (!(n % i)) return false;
  }
  return true;
};
