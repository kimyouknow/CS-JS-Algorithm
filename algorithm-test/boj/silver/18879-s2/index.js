const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../18879-s2/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // 객체활용의 key, value활용
// const solution = (rawInputs) => {
//   const [n, arr] = rawInputs;
//   const N = Number(n);
//   const originArr = arr.split(' ').map((v) => +v);
//   const sortedArr = [...originArr].sort((a, b) => a - b);
//   let key = 0;
//   const indexObj = {};
//   for (const element of sortedArr) {
//     if (indexObj[element] === undefined) {
//       indexObj[element] = key;
//       key++;
//     }
//   }

//   const answer = originArr.map((element) => indexObj[element]);
//   return answer.join(' ');
// };

// // upper_bound활용
// const upperBound = (target, sortedArr) => {
//   let start = 0;
//   let end = sortedArr.length;
//   while (start < end) {
//     const mid = Math.floor((start + end) / 2);
//     if (sortedArr[mid] <= target) {
//       start = mid + 1;
//     } else {
//       end = mid;
//     }
//   }
//   return start - 1;
// };

// const solution = (rawInputs) => {
//   const [n, arr] = rawInputs;
//   const N = Number(n);
//   const originArr = arr.split(' ').map((v) => +v);
//   const sortedArr = [...originArr].sort((a, b) => a - b);
//   const uni = [];
//   let idx = 0;
//   while (idx < N) {
//     uni.push(sortedArr[idx]);
//     const upperTargetIdx = upperBound(sortedArr[idx], sortedArr);
//     if (upperTargetIdx === idx) {
//       idx++;
//     } else {
//       idx = upperTargetIdx + 1;
//     }
//   }
//   return originArr.map((element) => uni.indexOf(element)).join(' ');
// };

const lowerBound = (target, sortedArr) => {
  let start = 0;
  let end = sortedArr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

// 중복제거 후 이분탐색 찾기
const solution = (rawInputs) => {
  const [n, arr] = rawInputs;
  const N = Number(n);
  const originArr = arr.split(' ').map((v) => +v);
  const sortedArr = [...originArr].sort((a, b) => a - b);
  // 중복제거
  const uni = [];
  for (let i = 0; i < N; i++) {
    if (i === 0 || sortedArr[i - 1] !== sortedArr[i]) {
      uni.push(sortedArr[i]);
    }
  }
  const answer = [];
  for (let i = 0; i < N; i++) {
    const lowerIdx = lowerBound(originArr[i], uni);
    answer.push(lowerIdx);
  }
  return answer.join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
