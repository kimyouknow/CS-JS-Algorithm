const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../15651-s3-n과m(3)/1.txt'))
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

// 같은 수를 여러 번 골라도 된다.
const solution = (rawInputs) => {
  const [n, m] = rawInputs;
  const answer = [];
  const temp = [];

  const dfs = () => {
    if (m === temp.length) {
      answer.push(temp.join(' '));
      return;
    }
    for (let i = 0; i < n; i++) {
      temp.push(i + 1);
      dfs(i);
      temp.pop();
    }
  };

  dfs();

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
