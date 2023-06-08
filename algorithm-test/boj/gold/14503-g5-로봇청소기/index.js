const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../14503-g5-로봇청소기/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

// 북동남서
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

// // BFS ✅
// const solution = (rawInputs) => {
//   const [[n, m], [cr, cc, cd], ...rooms] = rawInputs;
//   const visited = Array.from({ length: n }, () => Array(m).fill(false));

//   let answer = 0;

//   const rotate = (d) => (d < 0 ? d + 4 : d);
//   const isEmpty = (r, c) => rooms[r][c] === 0;
//   const isWall = (r, c) => rooms[r][c] === 1;

//   const queue = [[cr, cc, cd]];
//   let idx = 0;
//   while (queue.length > 0) {
//     const [r, c, d] = queue.shift();

//     if (isEmpty(r, c) && !visited[r][c]) {
//       answer++;
//       rooms[r][c] = 2;
//       visited[r][c] = true;
//     }

//     let canMove = false;
//     inner: for (let i = 0; i < 4; i++) {
//       const nd = (d + 3 - i) % 4;
//       const nr = r + dr[nd];
//       const nc = c + dc[nd];

//
//       if (isWall(nr, nc) || visited[nr][nc]) continue;
//       if (isEmpty(nr, nc)) {
//         queue.push([nr, nc, nd]);
//         canMove = true;
//         break inner;
//       }
//     }

//     if (!canMove) {
//       const nd = d + 2 < 4 ? d + 2 : d - 2;
//       const nr = r + dr[nd];
//       const nc = c + dc[nd];
//
//       if (isWall(nr, nc)) {
//         break;
//       }
//       queue.push([nr, nc, d]);
//     }
//   }

//   return answer;
// };

// DFS ✅
const solution = (rawInputs) => {
  const [[n, m], [cr, cc, cd], ...rooms] = rawInputs;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  let answer = 0;

  const isEmpty = (r, c) => rooms[r][c] === 0;
  const isWall = (r, c) => rooms[r][c] === 1;

  let flag = false;
  const search = (r, c, d) => {
    if (flag) return;
    if (isEmpty(r, c) && !visited[r][c]) {
      answer++;
      rooms[r][c] = 2;
      visited[r][c] = true;
    }
    let canMove = false;
    for (let i = 0; i < 4; i++) {
      const nd = (d + 3 - i) % 4;
      const nr = r + dr[nd];
      const nc = c + dc[nd];

      if (isWall(nr, nc) || visited[nr][nc]) continue;
      if (isEmpty(nr, nc)) {
        canMove = true;
        search(nr, nc, nd);
      }
    }

    if (!canMove) {
      const nd = d + 2 < 4 ? d + 2 : d - 2;
      const nr = r + dr[nd];
      const nc = c + dc[nd];
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) return;
      if (isWall(nr, nc)) {
        flag = true;
        return;
      }
      search(nr, nc, d);
    }
  };

  search(cr, cc, cd);

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
