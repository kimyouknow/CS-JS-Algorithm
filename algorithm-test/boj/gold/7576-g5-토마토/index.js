const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../7576-g5-토마토/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const dr = [0, 0, 1, -1];
const dc = [1, -1, 0, 0];

const solution = (rawInputs) => {
  const [[cc, rr], ...arr] = rawInputs;
  const visited = Array.from({ length: rr }, () => Array.from({ length: cc }, () => false));
  let notYet = 0;
  let answer = 0;

  const queue = [];
  for (let r = 0; r < rr; r++) {
    for (let c = 0; c < cc; c++) {
      if (arr[r][c] === 1) queue.push([r, c, 0]);
      if (arr[r][c] === 0) notYet++;
    }
  }
  let idx = 0;
  while (queue.length > idx) {
    const [r, c, acc] = queue[idx];
    // answer = acc;
    for (let i = 0; i < 4; i++) {
      const nextR = r + dr[i];
      const nextC = c + dc[i];
      if (nextR < 0 || nextR >= rr || nextC < 0 || nextC >= cc) continue;
      if (visited[nextR][nextC] || arr[nextR][nextC] !== 0) continue;
      visited[nextR][nextC] = true;
      arr[nextR][nextC] = 1;
      notYet--;
      if (notYet === 0) {
        answer = acc + 1;
        break;
      }
      queue.push([nextR, nextC, acc + 1]);
    }
    idx++;
  }

  return notYet > 0 ? -1 : answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
