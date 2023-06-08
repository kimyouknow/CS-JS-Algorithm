const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2447-g5-별찍기/1.txt'))
  .toString()
  .trim();

// // 1트 테이블 풀이✅
// const solution = (rawInputs) => {
//   const startN = Number(rawInputs);
//   const answer = Array.from({ length: startN }, () => Array.from({ length: startN }, () => ' '));

//   const dfs = (x, y, n) => {
//     if (n === 1) {
//       answer[x][y] = '*';
//       return;
//     }
//     const next = n / 3;
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) continue;
//         dfs(x + next * i, y + next * j, next);
//       }
//     }
//   };

//   dfs(0, 0, startN);

//   return answer.map((e) => e.join('')).join('\n');
// };

// 2트 재귀 문자열 풀이
const solution = (rawInputs) => {
  const startN = Number(rawInputs);

  const dfs = (n) => {
    if (n === 3) {
      return ['***', '* *', '***'];
    }
    const res = [];
    const next = n / 3;
    const template = dfs(next);
    for (let i = 0; i < n; i++) {
      if (i >= next && i < next * 2) {
        res[i] = template[i % next] + ' '.repeat(next) + template[i % next];
      } else {
        res[i] = template[i % next].repeat(3);
      }
    }
    return res;
  };

  return dfs(startN).join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
