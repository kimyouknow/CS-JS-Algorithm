const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../17140-g5.이차원배열과연산/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[rr, cc, k], ...arr] = rawInputs;
  const map = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => 0));
  for (let c = 0; c < 3; c++) {
    for (let r = 0; r < 3; r++) {
      map[c][r] = arr[c][r];
    }
  }
  let maxC = 3;
  let maxR = 3;

  const sortObjWithArr = (obj) =>
    Object.entries(obj)
      .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
      .reduce((acc, cur) => [...acc, ...cur], [])
      .map((v) => +v);

  const rCalculate = () => {
    let max = 0;
    for (let c = 0; c < maxR; c++) {
      const visited = {};
      for (let r = 0; r < maxC; r++) {
        const target = map[c][r];
        if (target === 0) continue;
        if (visited[target]) {
          visited[target]++;
        } else {
          visited[target] = 1;
        }
      }
      // 정렬
      const sorted = sortObjWithArr(visited);
      // 최대 길이 초기화
      if (max <= sorted.length) max = sorted.length;
      // 배열 재설정
      for (let i = 0; i < 100; i++) {
        if (i < sorted.length) map[c][i] = sorted[i];
        else map[c][i] = 0;
      }
    }
    maxC = max;
  };

  const cCalculate = () => {
    let max = 0;
    for (let r = 0; r < maxC; r++) {
      const visited = {};
      for (let c = 0; c < maxR; c++) {
        const target = map[c][r];
        if (target === 0) continue;
        if (visited[target]) {
          visited[target]++;
        } else {
          visited[target] = 1;
        }
      }
      // 정렬
      const sorted = sortObjWithArr(visited);
      // 최대 길이 초기화
      if (max <= sorted.length) max = sorted.length;
      // 배열 재설정
      for (let i = 0; i < 100; i++) {
        if (i < sorted.length) map[i][r] = sorted[i];
        else map[i][r] = 0;
      }
    }
    maxR = max;
  };

  let idx = 0;
  while (idx <= 100) {
    if (map[rr - 1][cc - 1] === k) break;
    if (maxR >= maxC) {
      rCalculate();
    } else {
      cCalculate();
    }
    idx++;
  }

  return idx > 100 ? -1 : idx;
};

console.log(solution(rawInputs));

module.exports = { solution };
