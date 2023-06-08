const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1932-s1-정수삼각형/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// 1트 ✅
const solution = (rawInputs) => {
  const [[n], ...arr] = rawInputs;
  const dp = Array.from({ length: 501 }, () => Array.from({ length: 501 }, () => 0));
  let answer = -1;
  dp[0][0] = arr[0][0];
  if (n === 1) return arr[0][0];
  dp[1][0] = arr[1][0] + dp[0][0];
  dp[1][1] = arr[1][1] + dp[0][0];
  if (n < 3) {
    answer = Math.max(dp[0][0], dp[1][0], dp[1][1]);
  }
  for (let i = 2; i < n; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + arr[i][j];
      } else if (j === arr[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
      }
      answer = Math.max(answer, dp[i][j]);
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
