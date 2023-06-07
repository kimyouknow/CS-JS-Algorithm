const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2206-g3-벽 부수고 이동하기/1.txt'))
  .toString()
  .trim()
  .split('\n');
// .map((e) => e.split('').map((v) => +v));

const dr = [0, 0, 1, -1];
const dc = [1, -1, 0, 0];

const solution = (rawInputs) => {
  const [n, m] = rawInputs[0].split(' ').map((v) => +v);
  const arr = rawInputs.slice(1).map((v) => v.split('').map((v) => +v));
  // const [[n, _, m], ...arr] = rawInputs;
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(2).fill(false))
  ); // [n][m][벽 처음, 이미 뚫음]
  let answer = -1;
  const queue = [];
  queue.push([0, 0, 1, true]);
  visited[0][0][0] = true;
  visited[0][0][1] = true;
  let idx = 0;
  while (queue.length > idx) {
    const [r, c, acc, chance] = queue[idx];
    if (r === n - 1 && c === m - 1) {
      answer = acc;
      break;
    }
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;

      if (chance) {
        // 벽을 뚫은 적이 없음
        if (arr[nr][nc] === 0 && !visited[nr][nc][0]) {
          visited[nr][nc][0] = true;
          queue.push([nr, nc, acc + 1, chance]);
        } else if (arr[nr][nc] === 1 && !visited[nr][nc][0]) {
          visited[nr][nc][0] = true;
          queue.push([nr, nc, acc + 1, !chance]);
        }
      } else {
        // 벽을 이미 뚫음
        if (arr[nr][nc] === 0 && !visited[nr][nc][0] && !visited[nr][nc][1]) {
          visited[nr][nc][1] = true;
          queue.push([nr, nc, acc + 1, chance]);
        }
      }
    }
    idx++;
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
