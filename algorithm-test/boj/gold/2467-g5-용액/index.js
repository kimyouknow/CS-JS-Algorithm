const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2467-g5-용액/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[n], arr] = rawInputs;
  let min = Number.MAX_SAFE_INTEGER;
  const answer = [];

  const findAbsMin = (idx) => {
    let l = idx + 1;
    let r = n;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      const sum = arr[idx] + arr[m];
      if (min > Math.abs(sum)) {
        min = Math.abs(sum);
        answer[0] = arr[idx];
        answer[1] = arr[m];
      }
      if (sum > 0) {
        r = m;
      } else if (sum < 0) {
        l = m + 1;
      } else {
        break;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    findAbsMin(i);
  }

  return answer.join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
