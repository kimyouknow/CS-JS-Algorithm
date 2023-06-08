const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1283-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [n, ...arr] = rawInputs;
  const N = Number(n);
  const inputs = arr.map((e) => e.split(' '));
  const shortcuts = {};
  const visited = Array.from({ length: N }, () => false);

  const answer = inputs.map((options, idx) => {
    for (const [i, option] of options.entries()) {
      const target = option[0].toLowerCase();
      if (!shortcuts[target]) {
        shortcuts[target] = true;
        options[i] = '[' + option[0] + ']' + option.slice(1);
        visited[idx] = true;
        break;
      }
    }
    if (visited[idx]) return options;
    let done = false;
    for (const [i, option] of options.entries()) {
      const len = option.length;
      if (done) break;
      for (let j = 0; j < len; j++) {
        const target = option[j].toLowerCase();
        if (!shortcuts[target]) {
          shortcuts[target] = true;
          options[i] = option.slice(0, j) + '[' + option[j] + ']' + option.slice(j + 1);
          done = true;
          break;
        }
      }
    }
    return options;
  });

  return answer.map((e) => e.join(' ')).join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
