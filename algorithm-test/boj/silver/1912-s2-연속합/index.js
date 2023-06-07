const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1912-s2-연속합/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

// // 이중 for문 시간초과
// const solution = (rawInputs) => {
//   const [[n], arr] = rawInputs;
//   let answer = -1_001;

//   // const dp = Array.from({ length: n }, () => Array(n).fill(0));
//   const dp = Array.from({ length: n }, () => 0);

//   const findMax = (num) => (answer = Math.max(num, answer));

//   for (let s = 0; s < n; s++) {
//     for (let e = s; e < n; e++) {
//       if (s === e) {
//         // dp[s][e] = arr[s];
//         dp[e] = arr[e];
//         findMax(dp[e]);
//         continue;
//       }
//       // dp[s][e] = dp[s][e - 1] + arr[e];
//       dp[e] = dp[e - 1] + arr[e];
//       findMax(dp[e]);
//     }
//   }

//   return answer;
// };

// 시간초과 개선 ✅
const solution = (rawInputs) => {
  const [[n], arr] = rawInputs;
  let answer = -1_001;

  const findMax = (num) => (answer = Math.max(num, answer));

  findMax(arr[0]);
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > 0) arr[i] = arr[i] + arr[i - 1];
    findMax(arr[i]);
  }

  return answer;
};
console.log(solution(rawInputs));

module.exports = { solution };
