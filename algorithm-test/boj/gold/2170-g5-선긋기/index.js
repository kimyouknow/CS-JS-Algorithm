const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2170-g5-선긋기/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[n], ...arr] = rawInputs;
  let answer = 0;

  const sorted = arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let [accS, accE] = sorted[0];

  for (let i = 1; i < n; i++) {
    const [s, e] = sorted[i];
    if (accS <= s && s <= accE) {
      if (e > accE) {
        accE = e;
      }
    } else if (accE < s) {
      answer += accE - accS;
      accS = s;
      accE = e;
    }
  }
  answer += accE - accS;

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
