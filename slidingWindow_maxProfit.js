/**
 * @param {number[]} prices
 * @return {number}
*/
var maxProfit2 = function(prices) {
  let maxProfit = 0;

  for (const [buy, buyPrice] of prices.entries()) {
    let sell = prices.length - 1;

    while (sell > buy) {
      const diff = prices[sell] - buyPrice;
      if (diff > maxProfit) {
        maxProfit = diff;
      }
      sell--;
    }
  }

  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
*/
var maxProfit = function(prices) {
  let maxProfit = 0;

  if (prices.length === 1) return maxProfit;

  let buy = 0, sell = 1;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      const profit = prices[sell] - prices[buy];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      buy = sell;
    }
    sell++;
  }

  return maxProfit;
};


console.log(maxProfit([7,2,5,1,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([1,4,2])) // 3
console.log(maxProfit([1])) // 0
console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9])) // 9
