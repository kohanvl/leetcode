/**
 * Easy - https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  return Math.max(
    ...accounts.map(
      (account) => account.reduce((sum, money) => sum + money),
      0,
    ),
  );
};
