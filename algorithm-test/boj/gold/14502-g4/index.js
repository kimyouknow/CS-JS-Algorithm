const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../14502-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const moveX = [0, 1, 0, -1];
const moveY = [1, 0, -1, 0];

const solution = (rawInputs) => {
  const [[col, row], ...map] = rawInputs;
  let answer = Number.MIN_SAFE_INTEGER;

  const spreadVirus = (newMap) => {
    const queue = [];
    let empty = 0;

    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (newMap[i][j] === 2) queue.push([i, j]);
        if (newMap[i][j] === 0) empty++;
      }
    }
    while (queue.length > 0) {
      const [curI, curJ] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextI = curI + moveX[i];
        const nextJ = curJ + moveY[i];
        if (nextI < 0 || nextI >= col || nextJ < 0 || nextJ >= row) continue;
        if (newMap[nextI][nextJ] === 0) {
          newMap[nextI][nextJ] = 2;
          empty--;
          queue.push([nextI, nextJ]);
        }
      }
    }
    return empty;
  };

  const buildWall = (idx) => {
    if (idx === 3) {
      const newMap = map.map((v) => [...v]);
      const res = spreadVirus(newMap);
      if (answer <= res) {
        answer = res;
      }
      return;
    }
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (map[i][j] === 0) {
          map[i][j] = 1;
          buildWall(idx + 1);
          map[i][j] = 0;
        }
      }
    }
  };

  buildWall(0);

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
