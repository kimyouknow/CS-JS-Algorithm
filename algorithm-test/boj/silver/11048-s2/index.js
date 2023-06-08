const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../11048-s2/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[n, m], ...arr] = rawInputs;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));

  for (let c = 0; c < n; c++) {
    for (let r = 0; r < m; r++) {
      if (c === 0 && r === 0) {
        dp[0][0] = arr[0][0];
        continue;
      }
      if (c === 0) {
        dp[c][r] = arr[c][r] + dp[c][r - 1];
        continue;
      }
      if (r === 0) {
        dp[c][r] = arr[c][r] + dp[c - 1][r];
        continue;
      }
      dp[c][r] =
        arr[c][r] + Math.max(dp[c - 1][r], dp[c][r - 1], dp[c - 1][r - 1]);
    }
  }

  return dp[n - 1][m - 1];
};

console.log(solution(rawInputs));

module.exports = { solution };
