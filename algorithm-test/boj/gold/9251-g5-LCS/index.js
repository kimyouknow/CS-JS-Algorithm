const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../9251-g5-LCS/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [x, y] = rawInputs;
  let answer = 0;
  const n = Math.max(x.length, y.length) + 1;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i <= x.length; i++) {
    for (let j = 0; j <= y.length; j++) {
      if (i === 0 || j === 0) {
        continue;
      }
      if (x[i - 1] === y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
      answer = Math.max(dp[i][j], answer);
    }
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
