const path = require('path');
const fs = require('fs');
const [targetInputs, ...rest] = fs
  .readFileSync(path.resolve(__dirname, `../1012-s2/1.txt`))
  .toString()
  .trim()
  .split('\n');

const solution = (t, arr) => {
  let nextArr = arr;
  const answer = [];
  while (t > 0) {
    const [inputs, ...arrs] = nextArr;
    const [m, n, count] = inputs.split(' ').map((v) => +v);
    nextArr = arrs.slice(count);
    const visitedChecker = Array.from(Array(m), () => Array(n).fill(false));
    const field = Array.from(Array(m), () => Array(n).fill(0));
    arrs.slice(0, count).forEach((target) => {
      const [x, y] = target.split(' ').map((v) => +v);
      field[x][y] = 1;
    });

    const checker = (x, y) => {
      if (x >= m || y >= n || x < 0 || y < 0 || visitedChecker[x][y]) return;
      if (field[x][y] === 1) {
        visitedChecker[x][y] = true;
        checker(x + 1, y);
        checker(x, y + 1);
        checker(x - 1, y);
        checker(x, y - 1);
      }
    };

    const direction = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    const bfs = (startX, startY) => {
      const queue = [[startX, startY]];
      while (queue.length > 0) {
        const [x, y] = queue.shift();

        if (field[x][y] === 0) continue;

        if (visitedChecker[x][y]) continue;
        else visitedChecker[x][y] = true;

        for (const [dx, dy] of direction) {
          const targetX = x + dx;
          const targetY = y + dy;
          if (targetX >= m || targetY >= n || targetX < 0 || targetY < 0)
            continue;

          if (field[targetX][targetY] === 1) queue.push([targetX, targetY]);
        }
      }
    };

    let acc = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (field[i][j] === 1 && !visitedChecker[i][j]) {
          bfs(i, j);
          acc++;
        }
      }
    }
    answer.push(Number(acc));
    t--;
  }
  return answer.join('\n');
};

// console.log(solution(targetInputs, rest));

module.exports = { solution };
