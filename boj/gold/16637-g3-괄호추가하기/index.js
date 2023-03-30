const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../16637-g3-괄호추가하기/1.txt'))
  .toString()
  .trim()
  .split('\n');

const calMap = {
  '+': (a, b) => Number(a) + Number(b),
  '-': (a, b) => Number(a) - Number(b),
  '*': (a, b) => Number(a) * Number(b),
};

const solution = (rawInputs) => {
  const n = Number(rawInputs[0]);
  const inputs = rawInputs[1];
  let answer = Number.MIN_SAFE_INTEGER;

  const dfs = (idx, acc) => {
    if (idx >= n) {
      if (acc > answer) {
        answer = acc;
      }
      return;
    }
    const target = inputs[idx];

    if (Number.isInteger(Number(target))) {
      dfs(idx + 1, target);
    } else {
      if (idx + 2 < n) {
        const a = inputs[idx + 1];
        const b = inputs[idx + 3];
        const cal = inputs[idx + 2];
        const next = calMap[cal](a, b);
        dfs(idx + 4, calMap[target](acc, next));
      }
      dfs(idx + 2, calMap[target](acc, inputs[idx + 1]));
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
