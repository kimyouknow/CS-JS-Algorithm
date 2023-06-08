const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1992-s1-쿼드트리/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split('').map((v) => +v));

const solution = (rawInputs) => {
  const [[n], ...arr] = rawInputs;
  const answer = [];

  const dfs = (x, y, idx) => {
    let flag = 0;
    for (let i = 0; i < idx; i++) {
      for (let j = 0; j < idx; j++) {
        flag += arr[x + j][y + i];
      }
    }

    if (flag === 0) answer.push('0');
    else if (flag === idx * idx) answer.push('1');
    else {
      const next = idx / 2;
      answer.push('(');
      dfs(x, y, next);
      dfs(x, y + next, next);
      dfs(x + next, y, next);
      dfs(x + next, y + next, next);
      answer.push(')');
    }
  };

  dfs(0, 0, n);

  return answer.join('');
};

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const input = [];

// rl.on('line', (answer) => {
//   input.push(answer.trim());
// }).on('close', () => {
//   console.log(solution(input.map((e) => e.split('').map((v) => +v))));
// });

console.log(solution(rawInputs));

module.exports = { solution };
