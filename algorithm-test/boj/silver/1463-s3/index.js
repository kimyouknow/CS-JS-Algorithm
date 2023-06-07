const path = require('path');
const fs = require('fs');
const input = fs
  .readFileSync(path.resolve(__dirname, `../1463-s3/1.txt`))
  .toString()
  .trim();

const solution = (N) => {
  const n = Number(N);
  const memo = new Array(n + 1).fill(0);
  memo[1] = 0;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + 1;

    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }

    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }
  }
  return memo[n];
};

console.log(solution(input));

module.exports = { solution };
