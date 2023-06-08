const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../2529-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const signMap = {
  '>': (a, b) => a > b,
  '<': (a, b) => a < b,
};

const arrToNum = (arr) => Number(arr.join(''));

const solution = (rawInputs) => {
  let [n, signs] = rawInputs;
  n = Number(n);
  signs = signs.split(' ');
  const numbers = Array.from({ length: 10 }, (v, i) => i);

  let min = [Number.MAX_SAFE_INTEGER];
  let max = [Number.MIN_SAFE_INTEGER];

  const recur = (idx, acc, visited) => {
    if (idx === n) {
      if (arrToNum(acc) >= arrToNum(max)) max = acc;
      if (arrToNum(acc) <= arrToNum(min)) min = acc;
      return;
    }
    for (let i = 0; i < 10; i++) {
      if (visited[i]) continue;
      const sign = signMap[signs[idx]];
      if (!sign(acc[acc.length - 1], i)) continue;
      visited[i] = true;
      recur(idx + 1, [...acc, i], [...visited]);
      visited[i] = false;
    }
  };

  numbers.forEach((number) => {
    const visited = Array.from({ length: 10 }, (v) => false);
    visited[number] = true;
    recur(0, [number], visited);
  });

  return `${max.join('')}\n${min.join('')}`;
};

console.log(solution(rawInputs));

module.exports = { solution };
