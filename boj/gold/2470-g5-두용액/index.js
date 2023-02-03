const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2470-g5-두용액/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((e) => +e));

// // 투포인터
// const solution = (rawInputs) => {
//   const [[n], arr] = rawInputs;
//   const sorted = arr.sort((a, b) => a - b);
//   let min = Number.MAX_SAFE_INTEGER;
//   const answer = [];

//   let s = 0;
//   let e = n - 1;
//   while (s < e) {
//     const sum = sorted[s] + sorted[e];
//     if (min > Math.abs(sum)) {
//       min = Math.abs(sum);
//       answer[0] = sorted[s];
//       answer[1] = sorted[e];
//     }
//     if (sum === 0) break;
//     if (sum > 0) {
//       e--;
//     } else {
//       s++;
//     }
//   }

//   return answer.join(' ');
// };

// 이분탐색
const solution = (rawInputs) => {
  const [[n], arr] = rawInputs;
  const sorted = arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  const answer = [];

  const findMin = (idx) => {
    let s = idx + 1;
    let e = n;
    while (s < e) {
      let m = Math.floor((s + e) / 2);
      const sum = sorted[idx] + sorted[m];
      if (min > Math.abs(sum)) {
        min = Math.abs(sum);
        answer[0] = sorted[idx];
        answer[1] = sorted[m];
      }
      if (sum === 0) break;
      if (sum < 0) {
        s = m + 1;
      } else {
        e = m;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    findMin(i);
  }

  return answer.join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
