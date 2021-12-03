// Easy - https://leetcode.com/problems/fibonacci-number/
const cache = {};
const fib = (n: number): number => {
  if (cache[n]) return cache[n];
  let res = 0;
  if (n < 2) res = n;
  else res = fib(n - 1) + fib(n - 2);
  cache[n] = res;
  return res;
};
