const path = require('path');
const fs = require('fs');
const rawData = fs
  .readFileSync(path.resolve(__dirname, '../11659-s3/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((element) => element.split(' ').map((v) => +v));

const solution = (rawData) => {
  const [inputs, numbers, ...arrs] = rawData;
  const [n, m] = inputs;
  const answer = [];
  const memo = Array(n + 1).fill(0);
  // memo에 누적합 넣기
  for (let i = 1; i < n + 1; i++) {
    memo[i] = numbers[i - 1] + memo[i - 1];
  }
  arrs.forEach(([i, j]) => {
    answer.push(memo[j] - memo[i - 1]);
  });
  return answer.join('\n');
};

console.log(solution(rawData));

module.exports = { solution };
