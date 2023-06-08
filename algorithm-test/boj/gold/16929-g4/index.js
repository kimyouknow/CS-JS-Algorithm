const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../16929-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

const moveMap = [
  (x, y) => [x, y + 1],
  (x, y) => [x, y - 1],
  (x, y) => [x + 1, y],
  (x, y) => [x - 1, y],
];

const solution = (rawInputs) => {
  const [inputs, ...arr] = rawInputs;
  const [n, m] = inputs.split(' ').map((v) => +v);
  const matrix = arr.map((e) => e.split(''));
  let answer = false;
  let start = [];

  const quest = (i, j, visited, length) => {
    const [x, y, color] = start;
    visited[i][j] = true;
    console.log('visited :>> ', visited);
    for (const move of moveMap) {
      const [nextI, nextJ] = move(i, j);
      if (nextI < 0 || nextJ < 0 || nextI >= n || nextJ >= m) continue;
      if (matrix[nextI][nextJ] !== color) continue;
      if (length >= 3) {
        if (x === nextI && y === nextJ) {
          answer = true;
          return;
        }
      }
      if (!visited[nextI][nextJ]) {
        quest(nextI, nextJ, [...visited], length + 1);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const visited = Array(n)
        .fill(0)
        .map((e) => Array(m).fill(false));
      start = [i, j, matrix[i][j]];
      quest(i, j, visited, 0);
    }
  }

  return answer ? 'Yes' : 'No';
};

console.log(solution(rawInputs));

module.exports = { solution };
