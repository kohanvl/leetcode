/**
 * Easy - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxAmount = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) maxAmount += prices[i + 1] - prices[i];
  }
  return maxAmount;
};
