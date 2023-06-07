/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let min = 0;
  let ans = 0;
  if (n < 2) return 0;
  for (let sell = 0; sell < n; sell++) {
    if (prices[min] >= prices[sell]) {
      min = sell;
    }
    if (ans <= prices[sell] - prices[min]) {
      ans = prices[sell] - prices[min];
    }
  }
  return ans;
};

// read
// price[i]: price of stock on the ith day
// maximize profit
//      choose diff day in the future - choose signle day
//      can not make profit. return 0
// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

// sol1 33m
// 뒤에 더 작은 조합이 나올 수 있음
// 이중 for문(O(n ^ 2))

// 투포인터 선형 탐색(O(n))
// buy, sell
// sell >= buy
// n = prices.length
// let min
// let acc
// if(n < 2) return 0
// for( 0 <= sell < n)
//     if(min >= prices[sell])
//         min = sell
//     acc = sell - min
