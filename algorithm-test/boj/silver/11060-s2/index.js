const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../11060-s2/1.txt'))
  .toString()
  .trim()
  .split('\n');

// const solution = (rawInputs) => {
//   let [n, arr] = rawInputs;
//   n = Number(n);
//   arr = arr.split(' ').map((v) => +v);
//   let answer = Number.MAX_SAFE_INTEGER;

//   const recur = (idx, count) => {
//     if (idx >= n) {
//       return;
//     }
//     if (idx === n - 1) {
//       answer = Math.min(answer, count);
//       return;
//     }
//     const current = arr[idx];
//     if (current === 0) {
//       return;
//     }
//     for (let i = 1; i <= current; i++) {
//       recur(idx + i, count + 1);
//     }
//   };

//   recur(0, 0);

//   return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
// };

const solution = (rawInputs) => {
  let [n, arr] = rawInputs;
  n = Number(n);
  arr = arr.split(' ').map((v) => +v);
  const dp = Array(n).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) continue;

    for (let j = 1; j <= arr[i]; j++) {
      if (i + j >= n) continue;
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  return dp[n - 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[n - 1];
};

console.log(solution(rawInputs));

module.exports = { solution };
