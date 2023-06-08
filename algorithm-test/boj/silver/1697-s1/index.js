const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1697-s1/1.txt'))
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const calMap = {
  minusOne: (x) => x - 1,
  plusOne: (x) => x + 1,
  multiplyByTwo: (x) => x * 2,
};

const solution = (rawInputs) => {
  const [n, k] = rawInputs;
  const visted = Array(100001).fill(0);
  let answer = 0;
  const queue = [];
  queue.push([0, n]);
  visted[n] = 1;
  while (queue.length > 0) {
    const [time, target] = queue.shift();
    if (target === k) {
      answer = time;
      break;
    }
    Object.values(calMap).forEach((cal) => {
      const next = cal(target);
      if (visted[next] === 0 && next >= 0 && next <= 100000) {
        visted[next] = 1;
        queue.push([time + 1, next]);
      }
    });
  }
  return answer;
};

console.log(solution(rawInputs));

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (answer) => {
  const rawInputs = answer
    .toString()
    .trim()
    .split(' ')
    .map((v) => +v);
  console.log(solution(rawInputs));
  rl.close();
});

module.exports = { solution };
