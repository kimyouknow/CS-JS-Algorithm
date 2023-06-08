const path = require('path');
const fs = require('fs');
const inputs = fs
  .readFileSync(path.resolve(__dirname, '../11726-s3/1.txt'))
  .toString()
  .trim();

const solution = (inputs) => {
  const n = Number(inputs);
  const memo = Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
  }

  return memo[n];
};

// const solution = (inputs) => {
//   const n = Number(inputs);
//   const memo = Array(n + 1).fill(0);
//   const col = Array(n + 1).fill(0);
//   const row = Array(n + 1).fill(0);
//   memo[2] = 2;
//   col[2] = 1;
//   row[2] = 1;
//   for (let i = 3; i < n + 1; i++) {
//     memo[i] = (col[i - 1] * 2 + row[i - 1]) % 10007;
//     col[i] = col[i - 1] + row[i - 1];
//     row[i] = col[i - 1];
//   }
//   return memo[n];
// };

console.log(solution(inputs));

module.exports = { solution };
