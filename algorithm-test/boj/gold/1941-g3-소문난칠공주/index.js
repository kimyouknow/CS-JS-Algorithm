const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1941-g3-소문난칠공주/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(''));

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

// // for문 상하좌우
// const solution = (map) => {
//   const answers = [];
//   const visited = Array.from({ length: 5 }, () => Array(5).fill(false));

//   const makeUnique = (r, c) => r * 5 + c;
//   const makeRC = (unique) => [Math.floor(unique / 5), unique % 5];

//   const checkS = (arr) =>
//     arr.filter((v) => {
//       const [r, c] = makeRC(v);
//       return map[r][c] === 'S';
//     }).length >= 4;

//   const sortPath = (arr) => arr.sort((a, b) => a - b).join('-');

//   const checkExist = (arr) => {
//     for (const answer of answers) {
//       if (answer === arr) return true;
//     }
//     return false;
//   };

//   const dfs = (idx, r, c, acc) => {
//     if (idx > 6) {
//       if (!checkS(acc)) return;
//       const sorted = sortPath(acc);
//       if (checkExist(sorted)) return;
//       answers.push(sorted);
//       return;
//     }
//     for (let i = 0; i < 4; i++) {
//       const nr = dr[i] + r;
//       const nc = dc[i] + c;
//       if (nr < 0 || nr >= 5 || nc < 0 || nc >= 5) continue;
//       if (visited[nr][nc]) continue;
//       visited[nr][nc] = true;
//       const unique = makeUnique(nr, nc);
//       dfs(idx + 1, nr, nc, [...acc, unique]);
//       visited[nr][nc] = false;
//     }
//   };

//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       dfs(0, i, j, []);
//     }
//   }

//   return answers.length;
// };

// ✅
const solution = (map) => {
  const answers = [];

  const makeRC = (unique) => [Math.floor(unique / 5), unique % 5];

  const checkY = (r, c) => (map[r][c] === 'Y' ? 1 : 0);

  const sortPath = (arr) => arr.sort((a, b) => a - b).join('-');

  const checkExist = (arr) => {
    for (const answer of answers) {
      if (answer === arr) return true;
    }
    return false;
  };

  const isAdjacent = (arr) => {
    const queue = [];
    const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
    const adjacent = Array.from({ length: 5 }, () => Array(5).fill(false));

    for (let i = 0; i < arr.length; i++) {
      const [r, c] = makeRC(arr[i]);
      adjacent[r][c] = true;
    }

    const [r, c] = makeRC(arr[0]);
    visited[r][c] = true;
    queue.push([r, c]);
    let cnt = 1;
    while (queue.length > 0) {
      const [cr, cc] = queue.shift();
      if (cnt === 7) break;
      for (let i = 0; i < 4; i++) {
        const nr = dr[i] + cr;
        const nc = dc[i] + cc;
        if (nr < 0 || nr >= 5 || nc < 0 || nc >= 5) continue;
        if (visited[nr][nc]) continue;
        if (!adjacent[nr][nc]) continue;
        visited[nr][nc] = true;
        queue.push([nr, nc]);
        cnt++;
      }
    }

    return cnt === 7;
  };

  const dfs = (idx, yCount, acc) => {
    if (yCount >= 4) return;
    if (idx > 24) return;
    if (acc.length > 7) return;
    if (acc.length === 7) {
      if (!isAdjacent(acc)) return;
      const sorted = sortPath(acc);
      if (checkExist(sorted)) return;
      answers.push(acc);
      return;
    }

    const count = idx < 24 && checkY(...makeRC(idx + 1));

    dfs(idx + 1, yCount + count, [...acc, idx + 1]);
    dfs(idx + 1, yCount, [...acc]);
  };

  const yCount = checkY(0, 0);
  dfs(0, yCount, [0]);
  dfs(0, 0, []);

  return answers.length;
};

console.log(solution(rawInputs));

module.exports = { solution };
