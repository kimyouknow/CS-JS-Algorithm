const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../14499-g4-주사위굴리기/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const diceDrMap = {
  [1]: (dice) => {
    // 동
    const temp = dice[0];
    dice[0] = dice[1];
    dice[1] = dice[5];
    dice[5] = dice[3];
    dice[3] = temp;
    return dice;
  },
  [2]: (dice) => {
    // 서
    const temp = dice[0];
    dice[0] = dice[3];
    dice[3] = dice[5];
    dice[5] = dice[1];
    dice[1] = temp;
    return dice;
  },
  [3]: (dice) => {
    // 북
    const temp = dice[0];
    dice[0] = dice[2];
    dice[2] = dice[5];
    dice[5] = dice[4];
    dice[4] = temp;
    return dice;
  },
  [4]: (dice) => {
    // 남
    const temp = dice[0];
    dice[0] = dice[4];
    dice[4] = dice[5];
    dice[5] = dice[2];
    dice[2] = temp;
    return dice;
  },
};

const moveMap = {
  [1]: (r, c) => [r, c + 1], // 동
  [2]: (r, c) => [r, c - 1], // 서
  [3]: (r, c) => [r - 1, c], //  북
  [4]: (r, c) => [r + 1, c], // 남
};

const solution = (rawInputs) => {
  const [input, ...arr] = rawInputs;
  const [n, m, x, y, k] = input;
  const map = arr.slice(0, n);
  const orders = arr[n];
  const answer = [];
  let dice = Array(6).fill(0);
  let r = x;
  let c = y;

  const moveDice = (dr) => {
    const [nr, nc] = moveMap[dr](r, c);
    if (nr < 0 || nr >= n || nc < 0 || nc >= m) return;
    dice = diceDrMap[dr](dice);

    if (map[nr][nc] === 0) {
      map[nr][nc] = dice[0];
    } else {
      dice[0] = map[nr][nc];
      map[nr][nc] = 0;
    }

    r = nr;
    c = nc;

    answer.push(dice[5]);
  };

  orders.forEach(moveDice);

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
