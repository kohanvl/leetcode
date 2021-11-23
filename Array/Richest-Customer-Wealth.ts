// Easy - https://leetcode.com/problems/richest-customer-wealth/
const maximumWealth = (accounts: number[][]): number => {
  return Math.max(
    ...accounts.map(
      (account: number[]) =>
        account.reduce((sum: number, money: number) => sum + money),
      0,
    ),
  );
};
