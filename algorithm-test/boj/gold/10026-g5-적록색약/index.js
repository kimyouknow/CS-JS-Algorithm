const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../10026-g5-적록색약/1.txt'))
  .toString()
  .trim()
  .split('\n');

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

// // 1트: ✅
// const solution = (rawInputs) => {
//   const [N, ...arr] = rawInputs;
//   const n = Number(N);
//   const answer = [0, 0]; // 0: 적록색약 X, 1: 적록색약 O

//   const visited = Array.from({ length: n }, () => Array(n).fill(false));
//   const visitedColorNon = Array.from({ length: n }, () => Array(n).fill(false));

//   // 적록색약 X
//   const dfsColor = (target, r, c) => {
//     for (let i = 0; i < 4; i++) {
//       const nr = dr[i] + r;
//       const nc = dc[i] + c;
//       if (0 > nr || n <= nr || 0 > nc || n <= nc) continue;
//       if (arr[nr][nc] !== target) continue;
//       if (visited[nr][nc]) continue;
//       visited[nr][nc] = true;
//       dfsColor(target, nr, nc);
//     }
//   };

//   // 적록색약 O
//   const dfsColorNon = (target, r, c) => {
//     for (let i = 0; i < 4; i++) {
//       const nr = dr[i] + r;
//       const nc = dc[i] + c;
//       if (0 > nr || n <= nr || 0 > nc || n <= nc) continue;
//       if (target === 'B') {
//         if (arr[nr][nc] !== 'B') continue;
//       }
//       if (target === 'R' || target === 'G') {
//         if (arr[nr][nc] === 'B') continue;
//       }
//       if (visitedColorNon[nr][nc]) continue;
//       visitedColorNon[nr][nc] = true;
//       dfsColorNon(target, nr, nc);
//     }
//   };
//   for (let r = 0; r < n; r++) {
//     for (let c = 0; c < n; c++) {
//       if (!visited[r][c]) {
//         visited[r][c] = true;
//         dfsColor(arr[r][c], r, c);
//         answer[0]++;
//       }
//       if (!visitedColorNon[r][c]) {
//         visitedColorNon[r][c] = true;
//         dfsColorNon(arr[r][c], r, c);
//         answer[1]++;
//       }
//     }
//   }

//   return answer.join(' ');
// };

const solution = (rawInputs) => {
  const [[N], ...arr] = rawInputs.map((v) => v.split(''));
  const n = Number(N);
  const answer = [0, 0]; // 0: 적록색약 X, 1: 적록색약 O

  let visited = Array.from({ length: n }, () => Array(n).fill(false));

  const dfsColor = (target, r, c) => {
    for (let i = 0; i < 4; i++) {
      const nr = dr[i] + r;
      const nc = dc[i] + c;
      if (0 > nr || n <= nr || 0 > nc || n <= nc) continue;
      if (arr[nr][nc] !== target) continue;
      if (visited[nr][nc]) continue;
      visited[nr][nc] = true;
      dfsColor(target, nr, nc);
    }
  };

  const countSection = (idx) => {
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (!visited[r][c]) {
          visited[r][c] = true;
          dfsColor(arr[r][c], r, c);
          answer[idx]++;
        }
        if (idx === 0) {
          if (arr[r][c] === `G`) {
            arr[r][c] = `R`;
          }
        }
      }
    }
  };
  // 적록색약 X
  countSection(0);

  visited = Array.from({ length: n }, () => Array(n).fill(false));

  // 적록색약 O
  countSection(1);

  return answer.join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
