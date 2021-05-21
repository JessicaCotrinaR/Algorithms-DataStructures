function maxProfit(prices) {
  //get Min
  let min = Infinity;
  let idx = 0;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      idx = i;
    }
    min = Math.min(min, prices[i]);
  }
  console.log(min, idx);
  let prof = 0;
  for (let i = idx; i < prices.length; i++) {
    let profit = prices[i] - min;
    prof = Math.max(prof, profit);
  }
  return prof;
}
prices = [2, 4, 1];
console.log(maxProfit(prices));
