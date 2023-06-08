/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let answer = 0;
  let n = arr.length;
  const half = Math.floor(n / 2);
  const ht = arr.reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});
  const sorted = Object.entries(ht).sort((a, b) => b[1] - a[1]);
  for (const [k, v] of sorted) {
    if (n <= half) break;
    n -= v;
    answer++;
  }
  return answer;
};

// read
// arr : number[]
// number 몇개 골라서 arr에서 고른 number와 같은거 모두 제거
// 최소한의 number만 골라서 arr의 최소 반이상이 제거되도록 하기
// 2 <= arr.length <= 10^5
// arr.length is even.
// 1 <= arr[i] <= 10^5

// sol1: 11m
// n = number.length
// half = Math.floor(n/2)
// 1. make hash table : O(n)
// - ht(hash table): key:number - value:count
// 2. sort hash table
// - count가 큰 순으로 정렬: O(logn)
// - n에서 count를 하나씩 제거하면서 half와 비교
