const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../12865-g5/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [inputs, ...arr] = rawInputs;
  const [n, k] = inputs;
  const dp = Array(n + 1)
    .fill(0)
    .map((e) => Array(k + 1).fill(0));

  arr.unshift(null); // i가 1부터 시작하는 걸 맞추기위해서 임시 방편

  for (let i = 1; i < n + 1; i++) {
    const [weight, value] = arr[i];
    for (let j = 1; j < k + 1; j++) {
      // 물건의 무게가 j보다 클 때
      if (j < weight) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
        // 1) n번 물건을 안 담는 경우
        // 2) n번 물건을 담는 경우
      }
    }
  }
  return dp[n][k];
};

console.log(solution(rawInputs));

module.exports = { solution };
