const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../16197-g4-두동전/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // 1트: 재귀를 활용한 완전탐색 ✅
// const solution = (rawInputs) => {
//   const [input, ...arr] = rawInputs;
//   const [n, m] = input.split(' ').map((v) => +v);
//   const board = arr.map((e) => e.split(''));
//   let answer = 11;
//   let xc, xr, yc, yr;

//   // 동전 최초 위치 탐색
//   for (let c = 0; c < n; c++) {
//     for (let r = 0; r < m; r++) {
//       if (board[c][r] === 'o') {
//         if (xc === undefined) {
//           xc = c;
//           xr = r;
//         } else {
//           yc = c;
//           yr = r;
//         }
//       }
//     }
//   }

//   // 4방향 이동 : 상하좌우
//   const dc = [-1, 1, 0, 0];
//   const dr = [0, 0, -1, 1];

//   // c,r이 board밖으로 나갔는지 확인:
//   const isDrop = (c, r) => c < 0 || r < 0 || c >= n || r >= m;

//   // 이동 가능한지 확인
//   const isWall = (c, r) => {
//     if (isDrop(c, r)) return false;
//     return board[c][r] === '#';
//   };

//   // 재귀 완전 탐색
//   const dfs = (idx, c1, r1, c2, r2) => {
//     if (isDrop(c1, r1) && !isDrop(c2, r2)) {
//       answer = Math.min(answer, idx);
//       return;
//     }
//     if (!isDrop(c1, r1) && isDrop(c2, r2)) {
//       answer = Math.min(answer, idx);
//       return;
//     }
//     if (idx >= 11 || (isDrop(c1, r1) && isDrop(c2, r2))) {
//       return;
//     }
//     for (let d = 0; d < 4; d++) {
//       let nc1 = dc[d] + c1;
//       let nr1 = dr[d] + r1;
//       let nc2 = dc[d] + c2;
//       let nr2 = dr[d] + r2;
//       if (isWall(nc1, nr1)) {
//         nc1 = c1;
//         nr1 = r1;
//       }
//       if (isWall(nc2, nr2)) {
//         nc2 = c2;
//         nr2 = r2;
//       }
//       dfs(idx + 1, nc1, nr1, nc2, nr2);
//     }
//   };

//   dfs(0, xc, xr, yc, yr);

//   return answer === 11 ? -1 : answer;
// };

// BFS ✅
const solution = (rawInputs) => {
  const [input, ...arr] = rawInputs;
  const [n, m] = input.split(' ').map((v) => +v);
  const board = arr.map((e) => e.split(''));
  const memo = {};
  let answer = 11;
  let xc, xr, yc, yr;

  // 동전 최초 위치 탐색
  for (let c = 0; c < n; c++) {
    for (let r = 0; r < m; r++) {
      if (board[c][r] === 'o') {
        if (xc === undefined) {
          xc = c;
          xr = r;
        } else {
          yc = c;
          yr = r;
        }
      }
    }
  }

  // 4방향 이동
  const dc = [-1, 1, 0, 0];
  const dr = [0, 0, -1, 1];

  // memo key 생성
  const generateKey = (c1, r1, c2, r2) => `${c1}${r1}${c2}${r2}`;

  // c,r이 board밖으로 나갔는지 확인:
  const isDrop = (c, r) => c < 0 || r < 0 || c >= n || r >= m;

  // 이동 가능한지 확인
  const isWall = (c, r) => {
    if (isDrop(c, r)) return false;
    return board[c][r] === '#';
  };

  const queue = [];
  queue.push([0, xc, xr, yc, yr]);
  memo[generateKey(xc, xr, yc, yr)] = true;

  outer: while (queue.length > 0) {
    const [idx, c1, r1, c2, r2] = queue.shift();

    if (idx >= 11) {
      break;
    }

    inner: for (let d = 0; d < 4; d++) {
      let nc1 = dc[d] + c1;
      let nr1 = dr[d] + r1;
      let nc2 = dc[d] + c2;
      let nr2 = dr[d] + r2;

      if (isDrop(nc1, nr1) && !isDrop(nc2, nr2)) {
        answer = Math.min(answer, idx + 1);
        break outer;
      }
      if (!isDrop(nc1, nr1) && isDrop(nc2, nr2)) {
        answer = Math.min(answer, idx + 1);
        break outer;
      }

      if (isDrop(nc1, nr1) && isDrop(nc2, nr2)) continue inner;

      if (isWall(nc1, nr1)) {
        nc1 = c1;
        nr1 = r1;
      }
      if (isWall(nc2, nr2)) {
        nc2 = c2;
        nr2 = r2;
      }

      if (memo[generateKey(nc1, nr1, nc2, nr2)]) continue inner;
      memo[generateKey(nc1, nr1, nc2, nr2)] = true;

      queue.push([idx + 1, nc1, nr1, nc2, nr2]);
    }
  }
  return answer === 11 ? -1 : answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
