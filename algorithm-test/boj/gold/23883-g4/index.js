const path = require('path');
const fs = require('fs');
const { kMaxLength } = require('buffer');
const [inputs, arrs] = fs
  .readFileSync(path.resolve(__dirname, '../23883-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // 1트: 선택정렬 - 시간초과
// const solution = (input, arr) => {
//   const [N, K] = input.split(' ').map((v) => +v);
//   const sortedArr = arr.split(' ').map((v) => +v);
//   let idx = 0;
//   const answer = [];
//   let changeIdx = 0;

//   const changeChecker = (target, lastElement) => {
//     if (target === lastElement) {
//       return false;
//     }
//     changeIdx++;
//     return true;
//   };

//   for (let i = N - 1; i >= 0; i--) {
//     if (changeIdx >= K) {
//       break;
//     }

//     let max = 0;
//     for (let j = 0; j <= i; j++) {
//       if (max < sortedArr[j]) {
//         max = sortedArr[j];
//         idx = j;
//       }
//     }
//     const target = sortedArr[idx];
//     const lastElement = sortedArr[i];
//     if (changeChecker(target, lastElement)) {
//       answer.push([lastElement, max]);
//       sortedArr[i] = max;
//       sortedArr[idx] = lastElement;
//     }
//   }
//   if (changeIdx < K) return -1;
//   return answer[K - 1].join(' ');
// };

const solution = (input, arr) => {
  const [N, K] = input.split(' ').map((v) => +v);
  const origin = arr.split(' ').map((v) => +v);
  const dict = origin.reduce((acc, cur, idx) => ({ ...acc, [cur]: idx }), {});
  const sorted = [...origin].sort((a, b) => b - a);
  const answer = [];
  console.log('origin, dict, sorted :>> ', origin, dict, sorted);
  for (let i = 0; i < N; i++) {
    const current = sorted[i];
    const currentIdxInOrigin = dict[current];
    const originTarget = origin[currentIdxInOrigin]; // 바로 접그해서 수정
    const temp = origin[i];
    console.log('originTarget, temp :>> ', originTarget, temp);
    if (temp === originTarget) continue;
    origin[i] = originTarget;
    origin[currentIdxInOrigin] = temp;
    answer.push([temp, originTarget]);
    console.log('answer :>> ', answer);
  }
  return K > 0 ? -1 : answer[K].join(' ');
};

console.log(solution(inputs, arrs));

module.exports = { solution };
