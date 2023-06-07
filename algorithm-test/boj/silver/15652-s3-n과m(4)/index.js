const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../15652-s3-n과m(4)/1.txt'))
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

// 같은 수를 여러 번 골라도 된다.
// 고른 수열은 비내림차순이어야 한다.
const solution = (rawInputs) => {
  const [n, m] = rawInputs;
  const answer = [];
  const temp = [];

  const dfs = (idx) => {
    if (m === temp.length) {
      answer.push(temp.join(' '));
      return;
    }
    for (let i = idx; i < n; i++) {
      temp.push(i + 1);
      dfs(i);
      temp.pop();
    }
  };

  dfs(0);

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
