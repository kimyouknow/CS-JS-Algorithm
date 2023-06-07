const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../16324-g5/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const moveX = [0, 0, 1, -1];
const moveY = [1, -1, 0, 0];

const solution = (rawInputs) => {
  const [inputs, ...map] = rawInputs;
  const [n, l, r] = inputs;

  const bfs = (i, j, visited) => {
    const result = [];
    const queue = [];
    queue.push([i, j]);
    result.push([i, j]);
    let sum = map[i][j];
    visited[i][j] = true;
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let idx = 0; idx < 4; idx++) {
        const dx = x + moveX[idx];
        const dy = y + moveY[idx];
        if (dx < 0 || dy < 0 || dx >= n || dy >= n || visited[dx][dy]) continue;
        const diff = Math.abs(map[x][y] - map[dx][dy]);
        if (diff >= l && diff <= r) {
          visited[dx][dy] = true;
          queue.push([dx, dy]);
          result.push([dx, dy]);
          sum += map[dx][dy];
        }
      }
    }
    if (result.length === 1) return 0;
    let average = Math.floor(sum / result.length);
    result.forEach(([x, y]) => {
      map[x][y] = average;
    });
    return 1;
  };

  let answer = 0;
  let isChanged = 0;
  while (true) {
    const visited = Array(n)
      .fill(0)
      .map(() => Array(n).fill(false));
    let before = isChanged;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (visited[i][j]) continue;
        const res = bfs(i, j, visited);
        isChanged += res;
      }
    }
    if (isChanged === before) {
      break;
    }
    answer += 1;
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
