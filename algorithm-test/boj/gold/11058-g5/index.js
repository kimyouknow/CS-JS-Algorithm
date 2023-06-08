const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../11058-g5/1.txt'))
  .toString()
  .trim();

const solution = (rawInputs) => {
  const n = Number(rawInputs);
  const dp = Array.from({ length: 101 }, (_, idx) => idx);
  for (let i = 7; i <= n; i++) {
    dp[i] = Math.max(dp[i - 3] * 2, dp[i - 4] * 3, dp[i - 5] * 4);
  }

  return dp[n];
};

console.log(solution(rawInputs));

module.exports = { solution };
