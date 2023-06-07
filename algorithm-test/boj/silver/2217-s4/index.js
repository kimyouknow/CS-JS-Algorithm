const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../2217-s4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const solution = (rawInputs) => {
  const [n, ...arr] = rawInputs;
  const sortedArr = arr.sort((a, b) => a - b);
  let answer = -1;
  for (let i = 0; i < n; i++) {
    const current = sortedArr[i] * (n - i);
    if (current >= answer) {
      answer = current;
    }
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
