const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../15650-s1-n과m(2)/1.txt'))
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

// 오름차순, 중복없음
// const solution = (rawInputs) => {
//   const [n, m] = rawInputs;
//   const answer = [];
//   const visited = Array.from({ length: n }, () => false);

//   const dfs = (idx, x, acc) => {
//     if (idx === m) {
//       answer.push(acc.join(' '));
//       return;
//     }
//     for (let i = x; i < n; i++) {
//       if (visited[i]) continue;
//       visited[i] = true;
//       dfs(idx + 1, i, [...acc, i + 1]);
//       visited[i] = false;
//     }
//   };

//   dfs(0, 0, []);

//   return answer.join('\n');
// };

// 오름차순, 중복없음
const solution = (rawInputs) => {
  const [n, m] = rawInputs;
  const answer = [];
  const temp = [];
  const visited = Array.from({ length: n }, () => false);

  const dfs = (idx) => {
    if (m === temp.length) {
      answer.push(temp.join(' '));
      return;
    }
    for (let i = idx; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      temp.push(i + 1);
      dfs(i);
      temp.pop();
      visited[i] = false;
    }
  };

  dfs(0);

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
