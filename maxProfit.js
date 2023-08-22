const maxProfit = (prices) => {
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];

      if (profit > max) {
        max = profit;
      }
    } else {
      left = right;
    }
    right++;
  }
  return max;
};
