const W = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const B = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

// i = col, j = row
// x = col, y = row
const check = (i, j, arr) => {
  let countW = 0;
  let countB = 0;

  for (let x = i; x < 8 + i; x++) {
    for (let y = j; y < 8 + j; y++) {
      if (arr[x][y] !== W[y - j][x - i]) countW++;
      if (arr[x][y] !== B[y - j][x - i]) countB++;
    }
  }
  return countB > countW ? countW : countB;
};

const solution = (inputs, arr) => {
  const [M, N] = inputs.split(' ').map((v) => +v);
  let min = 65;
  // i = col, j = row
  for (let i = 0; i < M - 7; i++) {
    for (let j = 0; j < N - 7; j++) {
      const checked = check(i, j, arr);
      if (min >= checked) {
        min = checked;
      }
    }
  }
  return min;
};

module.exports = { solution };
