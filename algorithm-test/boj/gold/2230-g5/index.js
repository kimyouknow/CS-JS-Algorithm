const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../2230-g5/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // 이분탐색
// const lower_bound = (target, sortedArr) => {
//   let start = 0;
//   let end = sortedArr.length;
//   while (start < end) {
//     const mid = Math.floor((start + end) / 2);
//     if (sortedArr[mid] >= target) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return start;
// };

// const solution = (rawInputs) => {
//   const [inputs, ...arr] = rawInputs;
//   const [N, M] = inputs.split(' ').map((v) => +v);
//   const sortedArr = arr.map((v) => +v).sort((a, b) => a - b);
//   let answer = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < N; i++) {
//     const diff = M + sortedArr[i];
//     const idx = lower_bound(diff, sortedArr);
//     if (idx < N) {
//       answer = Math.min(answer, sortedArr[idx] - sortedArr[i]);
//     }
//   }
//   return answer;
// };

// // 투포인터 1
// const solution = (rawInputs) => {
//   const [inputs, ...arr] = rawInputs;
//   const [N, M] = inputs.split(' ').map((v) => +v);
//   const sortedArr = arr.map((v) => +v).sort((a, b) => a - b);
//   let answer = Number.MAX_SAFE_INTEGER;
//   let left = 0;
//   let right = 0;
//   while (left < N) {
//     const diff = sortedArr[right] - sortedArr[left];
//     if (diff >= M) {
//       answer = Math.min(answer, diff);
//     }
//     if (right >= N) {
//       left++;
//       continue;
//     }
//     if (diff < M) {
//       right++;
//     } else {
//       left++;
//     }
//   }
//   return answer;
// };

// 투포인터 2
const solution = (rawInputs) => {
  const [inputs, ...arr] = rawInputs;
  const [N, M] = inputs.split(' ').map((v) => +v);
  const sortedArr = arr.map((v) => +v).sort((a, b) => a - b);
  let answer = Number.MAX_SAFE_INTEGER;
  let right = 0;
  for (let left = 0; left < N; left++) {
    while (right < N && sortedArr[right] - sortedArr[left] < M) {
      right++;
    }
    if (right === N) break;
    answer = Math.min(answer, sortedArr[right] - sortedArr[left]);
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
