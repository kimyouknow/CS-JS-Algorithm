const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../15653-s3-n과m(5)/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// 중복되는 수열을 여러 번 출력하면 안되며
// 출력만 오름차순
const solution = (rawInputs) => {
  const [[n, m], inputs] = rawInputs;
  const arr = inputs.sort((a, b) => a - b);
  const answer = [];
  const temp = [];
  const visited = Array.from({ length: n }, () => false);

  const dfs = () => {
    if (m === temp.length) {
      answer.push(temp.join(' '));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      temp.push(arr[i]);
      dfs();
      temp.pop();
      visited[i] = false;
    }
  };

  dfs();

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
