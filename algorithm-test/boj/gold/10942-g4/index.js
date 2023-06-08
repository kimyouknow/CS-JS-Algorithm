const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../10942-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// 1트: dp배열을 0 ~ n-1까지 생각
const solution = (rawInputs) => {
  const [[n], arr, [m], ...cases] = rawInputs;

  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  // 초기화
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // 에러 처리: 연속한 두 수가 같을 때
  for (let i = 0; i <= n - 2; i++) {
    if (arr[i] === arr[i + 1]) {
      dp[i][i + 1] = true;
    }
  }

  for (let s = n - 1; s >= 0; s--) {
    for (let e = s + 2; e < n; e++) {
      if (arr[s] === arr[e] && dp[s + 1][e - 1]) {
        dp[s][e] = true;
      }
    }
  }

  const answer = [];
  for (const [s, e] of cases) {
    answer.push(dp[s - 1][e - 1] ? 1 : 0);
  }
  return answer.join('\n');
};

// // 2트: dp배열을 1 ~ n까지 생각
// const solution = (rawInputs) => {
//   const [[n], inputs, [m], ...cases] = rawInputs;
//   const arr = [0, ...inputs];

//   const dp = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => false));

//   // 초기화
//   for (let i = 1; i < n + 1; i++) {
//     dp[i][i] = true;
//   }

//   // 에러 처리: 연속한 두 수가 같을 때
//   for (let i = 1; i <= n - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       dp[i][i + 1] = true;
//     }
//   }

//   for (let s = n - 1; s >= 1; s--) {
//     for (let e = s + 2; e <= n; e++) {
//       if (arr[s] === arr[e] && dp[s + 1][e - 1]) {
//         dp[s][e] = true;
//       }
//     }
//   }

//   const answer = [];
//   for (const [s, e] of cases) {
//     answer.push(dp[s][e] ? 1 : 0);
//   }
//   return answer.join('\n');
// };

console.log(solution(rawInputs));

module.exports = { solution };
