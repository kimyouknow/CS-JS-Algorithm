const path = require('path');
const fs = require('fs');
const rawData = fs
  .readFileSync(path.resolve(__dirname, '../12852-s1/1.txt'))
  .toString()
  .trim();

// const solution = (rawData) => {
//   const n = Number(rawData);
//   const memo = Array(n + 1).fill(0);
//   const memoArr = Array(n + 1)
//     .fill(0)
//     .map((v) => []);
//   memo[1] = 1;
//   memoArr[1].push(1);
//   const recursion = (root, idx, acc) => {
//     if (memo[idx] !== 0) {
//       if (!memo[root]) {
//         memo[root] = acc + memo[idx];
//         memoArr[root] = [root, ...memoArr[idx]];
//         return;
//       }
//       // 누적값이 작은 값이 있다면 작은 값으로 변경
//       if (memo[root] > acc + memo[idx]) {
//         memo[root] = acc + memo[idx];
//         memoArr[root] = [root, ...memoArr[idx]];
//       }
//       return;
//     }
//     if (idx === 1) {
//       memo[root] = acc;
//       return;
//     }

//     if (idx % 3 === 0) recursion(root, idx / 3, acc + 1);
//     if (idx % 2 === 0) recursion(root, idx / 2, acc + 1);
//     recursion(root, idx - 1, acc + 1);
//   };
//   for (let i = 1; i < n + 1; i++) {
//     recursion(i, i, 0);
//   }
//   // memo[1]을 0이 아닌 1로 해놔서 마지막에 제거
//   return memo[n] - 1 + '\n' + memoArr[n].join(' ');
// };

const solution = (rawData) => {
  const n = Number(rawData);
  const memo = Array(n + 1).fill(0);
  const memoArr = Array(n + 1).fill(0);
  memo[1] = 0;
  for (let i = 2; i < n + 1; i++) {
    memo[i] = memo[i - 1] + 1;
    memoArr[i] = i - 1;
    if (i % 2 === 0 && memo[i] > memo[i / 2] + 1) {
      memo[i] = memo[i / 2] + 1;
      memoArr[i] = i / 2;
    }
    if (i % 3 === 0 && memo[i] > memo[i / 3] + 1) {
      memo[i] = memo[i / 3] + 1;
      memoArr[i] = i / 3;
    }
  }
  const answer = [];
  let cur = n;
  while (true) {
    answer.push(cur);
    if (cur === 1) break;
    cur = memoArr[cur];
  }
  return memo[n] + '\n' + answer.join(' ');
};

console.log(solution(rawData));

module.exports = { solution };
