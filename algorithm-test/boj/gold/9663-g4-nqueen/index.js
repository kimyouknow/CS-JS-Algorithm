const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../9663-g4-nqueen/1.txt'))
  .toString()
  .trim();

// const solution = (rawInputs) => {
//   const n = Number(rawInputs);
//   let answer = 0;
//   const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
//   let temp = 0;

//   const isOutOfRange = (x, y) => x < 0 || x >= n || y < 0 || y >= n;

//   const canBePlaced = (x, y) => {
//     for (let i = 0; i < n; i++) {
//       // 가로 체크할 필요 없음 ,dfs의 인자로 걸러짐
//       // if (visited[i][y]) return false;
//       // 세로
//       if (visited[x][i]) return false;
//       // 대각선:좌상단 우하단
//       if (!isOutOfRange(x - i, y - i) && visited[x - i][y - i]) return false;
//       if (!isOutOfRange(x + i, y + i) && visited[x + i][y + i]) return false;
//       // 대각선:좌하단 우상단
//       if (!isOutOfRange(x + i, y - i) && visited[x + i][y - i]) return false;
//       if (!isOutOfRange(x - i, y + i) && visited[x - i][y + i]) return false;
//     }
//     return true;
//   };

//   const dfs = (i) => {
//     if (temp === n) {
//       answer++;
//       return;
//     }
//     for (let j = 0; j < n; j++) {
//       if (visited[i][j]) continue;
//       if (!canBePlaced(i, j)) continue;
//       visited[i][j] = true;
//       temp++;
//       dfs(i + 1);
//       visited[i][j] = false;
//       temp--;
//     }
//   };

//   dfs(0);

//   return answer;
// };

// 3트: 다른 사람풀이 참고
const solution = (rawInputs) => {
  const n = Number(rawInputs);
  let answer = 0;
  // 세로
  const vertical = Array.from({ length: n }, () => false);
  // 대각선:좌상단 우하단
  const diagonalLeftUp = Array.from({ length: 2 * n - 1 }, () => false);
  // 대각선:좌하단 우상단
  const diagonalLeftDown = Array.from({ length: 2 * n - 1 }, () => false);

  const canBePlaced = (i, j) =>
    vertical[j] || diagonalLeftUp[n + i - j - 1] || diagonalLeftDown[i + j];

  const dfs = (i) => {
    if (i === n) {
      answer++;
      return;
    }
    for (let j = 0; j < n; j++) {
      if (canBePlaced(i, j)) continue;
      vertical[j] = true;
      diagonalLeftUp[n + i - j - 1] = true;
      diagonalLeftDown[i + j] = true;
      dfs(i + 1);
      vertical[j] = false;
      diagonalLeftUp[n + i - j - 1] = false;
      diagonalLeftDown[i + j] = false;
    }
  };

  dfs(0);

  return answer;
};

console.time();
console.log(solution(rawInputs));
console.timeEnd();

module.exports = { solution };
