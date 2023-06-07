const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../16987-g5-계란으로바위치기/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((e) => +e));

const solution = (rawInputs) => {
  const [[n], ...arr] = rawInputs;
  let answer = 0;

  const checkEggs = () => {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i][0] <= 0) cnt++;
    }
    return cnt;
  };

  const dfs = (i) => {
    if (i >= n) {
      const cnt = checkEggs();
      answer = Math.max(answer, cnt);
      return;
    }
    if (arr[i][0] <= 0) {
      dfs(i + 1);
      return;
    }
    let flag = false; // 칠 수 있는 계란이 있으면 true로 변경
    for (let j = 0; j < n; j++) {
      if (i === j || arr[j][0] <= 0) continue;
      arr[i][0] -= arr[j][1];
      arr[j][0] -= arr[i][1];
      flag = true;
      dfs(i + 1);
      arr[i][0] += arr[j][1];
      arr[j][0] += arr[i][1];
    }
    if (!flag) dfs(i + 1);
  };

  dfs(0);
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
