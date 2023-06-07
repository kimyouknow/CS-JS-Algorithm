const path = require('path');
const fs = require('fs');
const [inputs, arr] = fs
  .readFileSync(path.resolve(__dirname, '../1182-s2/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (inputs, arr) => {
  const [N, S] = inputs.split(' ').map((v) => +v);
  const numberArr = arr.split(' ').map((v) => +v);
  let answer = 0;

  const dfs = (idx, accArr) => {
    if (idx >= N) {
      if (accArr.length !== 0) {
        const sumAccArr = accArr.reduce((acc, cur) => cur + acc, 0);
        if (sumAccArr === S) {
          answer++;
        }
      }
      return;
    }
    const target = numberArr[idx];
    dfs(idx + 1, accArr);
    dfs(idx + 1, [...accArr, target]);
  };

  dfs(0, []);

  return answer;
};

console.log(solution(inputs, arr));

module.exports = { solution };
