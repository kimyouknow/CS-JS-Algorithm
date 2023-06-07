const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1041-g5/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[n], arr] = rawInputs;

  const pass = (x, y) => {
    if (x === y) return true;
    if (x === 0 && y === 5) return true;
    if (x === 1 && y === 4) return true;
    if (x === 2 && y === 3) return true;
    if (x === 3 && y === 2) return true;
    if (x === 4 && y === 1) return true;
    if (x === 5 && y === 0) return true;
  };

  const map = Array.from({ length: 6 }, () => Array(6).fill(false));
  const oneMax = Math.max(...arr);
  const oneMin = Math.min(...arr);
  let twoMin = Number.MAX_SAFE_INTEGER;
  let threeMin = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (pass(i, j)) continue;
      twoMin = Math.min(arr[i] + arr[j], twoMin);
      map[i][j] = true;
      for (let k = 0; k < 6; k++) {
        if (pass(i, k)) continue;
        if (pass(j, k)) continue;
        threeMin = Math.min(arr[i] + arr[j] + arr[k], threeMin);
      }
    }
  }

  if (n === 1) return arr.reduce((acc, cur) => acc + cur, 0) - oneMax;
  if (n === 2) return threeMin * 4 + twoMin * 4;
  return (
    threeMin * 4 + // 위 모서리
    twoMin * 4 + // 아래 모서리
    twoMin * 8 * (n - 2) + // 옆 모서리
    oneMin * 4 * (n - 2) + // 바닥에 붙은 모서리
    oneMin * Math.pow(n - 2, 2) * 5 // 가운데 모서리를 제외한 부분
  );
};

console.log(solution(rawInputs));

module.exports = { solution };
