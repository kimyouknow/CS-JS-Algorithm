const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../12869-g4-뮤탈리스크/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

// const caseMap = (n) => {
//   if (n === 1) {
//     return [[0]];
//   }
//   if (n === 2) {
//     return [
//       [0, 1],
//       [1, 0],
//     ];
//   }
//   if (n === 3) {
//     return [
//       [0, 1, 2],
//       [0, 2, 1],
//       [1, 2, 0],
//       [1, 0, 2],
//       [2, 1, 0],
//       [2, 0, 1],
//     ];
//   }
// };

// const attacks = {
//   [0]: (x) => x - 9,
//   [1]: (x) => x - 3,
//   [2]: (x) => x - 1,
// };

// ✅
// const solution = (rawInputs) => {
//   const [[n], arr] = rawInputs;

//   let answer = 0;
//   const queue = [];
//   const visited = {};

//   queue.push([0, arr]);

//   const cal = (cases, scvs) => {
//     const newScvs = [...scvs];
//     for (let i = 0; i < cases.length; i++) {
//       newScvs[cases[i]] = attacks[i](newScvs[cases[i]]);
//     }
//     return newScvs;
//   };

//   outer: while (queue.length > 0) {
//     const [idx, scvs] = queue.shift();

//     for (const cases of caseMap(n)) {
//       const newScvs = cal(cases, scvs);
//       if (newScvs.every((scv) => scv <= 0)) {
//         answer = idx + 1;
//         break outer;
//       }
//       const key = newScvs.join('-');
//       if (visited[key]) continue;
//       visited[key] = true;
//       queue.push([idx + 1, newScvs]);
//     }
//   }

//   return answer;
// };

const caseMap = [
  [9, 3, 1],
  [9, 1, 3],
  [3, 9, 1],
  [3, 1, 9],
  [1, 3, 9],
  [1, 9, 3],
];

// ✅
// const solution = (rawInputs) => {
//   const [[n], arr] = rawInputs;

//   let answer = 0;
//   const queue = [];
//   const visited = Array.from({ length: 61 }, () =>
//     Array.from({ length: 61 }, () => Array.from({ length: 61 }, () => false))
//   );

//   if (arr.length < 3) {
//     for (let i = 0; i <= 3 - arr.length; i++) {
//       arr.push(0);
//     }
//   }

//   queue.push([0, arr]);
//   const [a, b, c] = arr;
//   visited[a][b][c] = true;

//   const cal = (cases, scvs) => {ㄹ
//     const newScvs = [...scvs];
//     for (let i = 0; i < 3; i++) {
//       newScvs[i] = newScvs[i] - cases[i] < 0 ? 0 : newScvs[i] - cases[i];
//     }
//     return newScvs;
//   };

//   outer: while (queue.length > 0) {
//     const [idx, scvs] = queue.shift();

//     for (const cases of caseMap) {
//       const newScvs = cal(cases, scvs);
//       const [a, b, c] = newScvs;
//       if (newScvs.every((scv) => scv <= 0)) {
//         answer = idx + 1;
//         break outer;
//       }
//       if (visited[a][b][c]) continue;
//       visited[a][b][c] = true;
//       queue.push([idx + 1, newScvs]);
//     }
//   }

//   return answer;
// };

// DP
const solution = (rawInputs) => {
  const [[n], arr] = rawInputs;

  let answer = 0;
  const dp = Array.from({ length: 61 }, () =>
    Array.from({ length: 61 }, () => Array.from({ length: 61 }, () => -1))
  );

  if (arr.length < 3) {
    for (let i = 0; i <= 3 - arr.length; i++) {
      arr.push(0);
    }
  }
  const cal = (cases, scvs) => {
    const newScvs = [...scvs];
    for (let i = 0; i < 3; i++) {
      newScvs[i] = newScvs[i] - cases[i] < 0 ? 0 : newScvs[i] - cases[i];
    }
    return newScvs;
  };

  const dfs = (scvs) => {
    for (let i = 0; i < 3; i++) {
      if (scvs[i] < 0) scvs[i] = 0;
    }
    if (scvs.every((scv) => scv === 0)) return 0;
    const [a, b, c] = scvs;
    if (dp[a][b][c] !== -1) return dp[a][b][c];

    dp[a][b][c] = Number.MAX_SAFE_INTEGER;

    for (const cases of caseMap) {
      const newScvs = cal(cases, scvs);
      const [a, b, c] = newScvs;
      dp[a][b][c] = Math.min(dp[a][b][c], dfs(newScvs) + 1);
    }

    return dp[a][b][c];
  };

  return dfs(arr);
};

console.log(solution(rawInputs));

module.exports = { solution };
