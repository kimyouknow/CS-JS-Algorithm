const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../11047-s4/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [inputs, ...arrs] = rawInputs;
  let [n, k] = inputs.split(' ').map((v) => +v);
  const coinTypes = arrs.map((v) => +v);
  let answer = 0;
  let idx = n - 1;
  while (k > 0 && idx >= 0) {
    if (coinTypes[idx] <= k) {
      k -= coinTypes[idx];
      answer++;
    } else {
      idx--;
    }
  }
  return answer;
};

const solutionDp = (rawInputs) => {
  const [inputs, ...arrs] = rawInputs;
  let [n, k] = inputs.split(' ').map((v) => +v);
  const coinTypes = arrs.map((v) => +v);
};

console.log(solutionDp(rawInputs));

module.exports = { solution };
