const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../13913-g4/1.txt'))
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
  const visted = Array(100001).fill([]);
  let answer = 0;
  const queue = [];
  queue.push([0, n]);
  visted[n] = [null, n];
  while (queue.length > 0) {
    const [time, target] = queue.shift();
    if (target === k) {
      answer = time;
      break;
    }
    Object.values(calMap).forEach((cal) => {
      const next = cal(target);
      if (next >= 0 && next <= 100000 && visted[next].length === 0) {
        visted[next] = [target, next];
        queue.push([time + 1, next]);
      }
    });
  }
  let vistedPath = [];
  let cur = k;
  while (cur !== null) {
    const [prev, next] = visted[cur];
    vistedPath.push(next);
    cur = prev;
  }
  return answer + '\n' + vistedPath.reverse().join(' ');
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
