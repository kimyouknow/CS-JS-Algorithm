const path = require('path');
const fs = require('fs');
const inputs = fs
  .readFileSync(path.resolve(__dirname, '../1149-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (inputs) => {
  const [N, ...arrs] = inputs;
  const n = Number(N);
  const arr = arrs.map((element) => element.split(' ').map((v) => +v));
  const memo = Array(n)
    .fill(0)
    .map((v) => Array(3).fill(0));
  memo[0][0] = arr[0][0];
  memo[0][1] = arr[0][1];
  memo[0][2] = arr[0][2];
  for (let i = 1; i < n; i++) {
    memo[i][0] = Math.min(memo[i - 1][1], memo[i - 1][2]) + arr[i][0];
    memo[i][1] = Math.min(memo[i - 1][0], memo[i - 1][2]) + arr[i][1];
    memo[i][2] = Math.min(memo[i - 1][1], memo[i - 1][0]) + arr[i][2];
  }
  const answer = Math.min(...memo[n - 1]);
  return answer;
};

console.log(solution(inputs));

module.exports = { solution };
