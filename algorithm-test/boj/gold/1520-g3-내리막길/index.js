const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1520-g3-내리막길/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

// //1트 순수 DP - 논리적 오류로 실패
// const solution = (rawInputs) => {
//   const [[n, m], ...map] = rawInputs;

//   const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));

//   dp[0][0] = 1;

//   for (let r = 1; r < n; r++) {
//     if (map[r][0] < map[r - 1][0]) dp[r][0] = dp[r - 1][0];
//   }

//   for (let c = 1; c < m; c++) {
//     if (map[0][c] < map[0][c - 1]) dp[0][c] = dp[0][c - 1];
//   }

//   for (let r = 1; r < n; r++) {
//     for (let c = 1; c < m; c++) {
//       dp[r][c] = 0;
//       const target = map[r][c];

//       for (let i = 0; i < 4; i++) {
//         const nr = r + dr[i];
//         const nc = c + dc[i];
//         if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;

//         if (target < map[nr][nc]) {
//           // dp[r][c] += dp[nr][nc];
//           if (dp[nr][nc] === -1) {
//             dp[r][c]++;
//           } else if (dp[nr][nc] === 0) {
//             // dp[r][c]++;
//           } else {
//             dp[r][c] += dp[nr][nc];
//           }
//         }
//       }
//       // if (dp[r][c] === -1) dp[r][c] = 0;
//     }
//   }
//   console.log('dp', dp);

//   return dp[n - 1][m - 1];
// };

//1트 dp + dfs
const solution = (rawInputs) => {
  const [[n, m], ...map] = rawInputs;

  const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));

  const dfs = (r, c) => {
    if (r === n - 1 && c === m - 1) return 1;
    // 방문한 적이 있으면 해당 값을 사용
    if (dp[r][c] !== -1) return dp[r][c];

    // 방문처리
    dp[r][c] = 0;
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;

      // 현재 값보다 주변 값이 더 작으면 dfs 탐색 진행
      if (map[nr][nc] < map[r][c]) {
        dp[r][c] += dfs(nr, nc);
      }
    }

    // 탐색할 수 없는 곳이면 해당 값 사용
    return dp[r][c];
  };

  const answer = dfs(0, 0);

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
