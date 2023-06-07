const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../12919-g5-A와B2/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [s, t] = rawInputs;
  let answer = 0;

  const reverse = (str) => {
    let next = str.split('');
    let st = 0;
    let en = next.length - 1;
    while (st < en) {
      const temp = next[st];
      next[st] = next[en];
      next[en] = temp;
      st++;
      en--;
    }

    return next.join('');
  };

  const pop = (str) => str.slice(0, str.length - 1);

  const dfs = (str) => {
    if (str === s) {
      answer = 1;
      return;
    }
    if (str.length < s.length) {
      return;
    }
    if (str[str.length - 1] === 'A') {
      dfs(pop(str));
    }
    const reversed = reverse(str);
    if (reversed[reversed.length - 1] === 'B') {
      dfs(pop(reversed));
    }
  };

  dfs(t);

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
