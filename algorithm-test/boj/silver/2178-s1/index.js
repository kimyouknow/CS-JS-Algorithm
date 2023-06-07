const path = require('path');
const fs = require('fs');
const [input, ...arr] = fs
  .readFileSync(path.resolve(__dirname, '../2178-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const solution = (input, arr) => {
  const [N, M] = input.split(' ').map((v) => +v);

  const visited = Array(N)
    .fill(0)
    .map((ele) => Array(M).fill(false));

  const map = arr.map((ele) => ele.split('').map((v) => +v));

  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = true;
  while (queue.length > 0) {
    const [curRow, curCol] = queue.shift();

    for (const dr of direction) {
      const nextRow = curRow + dr[0];
      const nextCol = curCol + dr[1];

      if (nextRow < 0 || nextCol < 0 || nextRow >= N || nextCol >= M) continue;
      if (visited[nextRow][nextCol]) continue;

      if (map[nextRow][nextCol] === 1) {
        map[nextRow][nextCol] = map[curRow][curCol] + 1;
        queue.push([nextRow, nextCol]);
        visited[nextRow][nextCol] = true;
      }
    }
  }

  return map[N - 1][M - 1];
};

// const solution = (input, arr) => {
//   const [N, M] = input.split(' ').map((v) => +v);
//   const visited = Array(N)
//     .fill(0)
//     .map((ele) => Array(M).fill(false));
//   const arrs = arr.map((ele) => ele.split('').map((v) => +v));

//   let min = M * N;
//   const queue = [];
//   visited[0][0] = true;
//   queue.push([0, 0, 1]);
//   while (queue.length > 0) {
//     const target = queue.shift();
//     const [targetX, targetY, targetAcc] = target;
//     if (targetX === N - 1 && targetY === M - 1) {
//       if (targetAcc < min) {
//         min = targetAcc;
//       }
//       continue;
//     }

//     for (const dr of direction) {
//       const drX = targetX + dr[0];
//       const drY = targetY + dr[1];
//       if (drX < 0 || drY < 0 || drX >= N || drY >= M) continue;
//       if (visited[drX][drY]) continue;

//       if (arrs[drX][drY] === 1) {
//         queue.push([drX, drY, targetAcc + 1]);
//         visited[drX][drY] = true;
//         if (drX === N - 1 && drY === M - 1) visited[drX][drY] = false;
//       }
//     }
//   }

//   return min;
// };

console.log(solution(input, arr));

module.exports = { solution };
