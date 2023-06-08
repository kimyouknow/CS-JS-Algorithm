const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../3190-g4-뱀/1.txt'))
  .toString()
  .trim()
  .split('\n');

// L -> index -1, R -> indx + 1
const drMap = [
  (r, c) => [r, c + 1], //오른쪽
  (r, c) => [r + 1, c], //아래
  (r, c) => [r, c - 1], //왼쪽
  (r, c) => [r - 1, c], //위
];

const turn = (drIdx, dr) => {
  if (dr === 'L') {
    return drIdx - 1 < 0 ? 3 : drIdx - 1;
  } else {
    return drIdx + 1 > 3 ? 0 : drIdx + 1;
  }
};

const solution = (rawInputs) => {
  const n = Number(rawInputs[0]);
  const k = Number(rawInputs[1]);
  const apples = rawInputs.slice(2, k + 2).map((e) => e.split(' ').map((v) => +v));
  const l = Number(rawInputs[k + 2]);
  const drs = rawInputs
    .slice(k + 3)
    .map((e) => e.split(' '))
    .reduce((acc, cur) => {
      acc[cur[0]] = cur[1];
      return acc;
    }, {});

  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  // 0: 빔, 1: 방문, -1: 사과
  apples.forEach(([r, c]) => {
    board[r - 1][c - 1] = -1; // 사과
  });

  const dequeue = [[0, 0]];
  board[0][0] = 1;

  let idx = 0;
  let drIdx = 0;

  while (true) {
    // 방향 최신화

    const [nr, nc] = drMap[drIdx](...dequeue[0]);
    idx++;

    if (nr < 0 || nr >= n || nc < 0 || nc >= n || board[nr][nc] === 1) break;

    // 사과있음
    if (board[nr][nc] === -1) {
      dequeue.unshift([nr, nc]);
    } else {
      dequeue.unshift([nr, nc]);
      const [tr, tc] = dequeue.pop();
      board[tr][tc] = 0;
    }

    board[nr][nc] = 1; // 사과제거 및 방문처리

    if (drs[idx] !== undefined) {
      drIdx = turn(drIdx, drs[idx]);
    }
  }

  return idx;
};

console.log(solution(rawInputs));

module.exports = { solution };
