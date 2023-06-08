const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../15654-s3-n과m(6)/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// N개의 자연수 중에서 M개를 고른 수열
// 중복 X
// 고른 수열 오름차순 정렬
// 출력 오름차순
const solution = (rawInputs) => {
  const [[n, m], inputs] = rawInputs;
  const arr = inputs.sort((a, b) => a - b);
  const answer = [];
  const temp = [];

  const dfs = (idx) => {
    if (m === temp.length) {
      answer.push(temp.join(' '));
      return;
    }
    for (let i = idx; i < n; i++) {
      temp.push(arr[i]);
      dfs(i + 1);
      temp.pop();
    }
  };

  dfs(0);

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
