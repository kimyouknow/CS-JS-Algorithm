const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../10816-s4/1.txt'))
  .toString()
  .trim()
  .split('\n');

const binarySearch = (target, sortedArr) => {
  const binaryRecursion = (start, end) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const midValue = sortedArr[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      return binaryRecursion(mid + 1, end);
    } else if (midValue > target) {
      return binaryRecursion(start, mid - 1);
    }
  };
  const start = 0;
  const end = sortedArr.length - 1;
  return binaryRecursion(start, end);
};

// // 1) 주어진 배열에서 같은 숫자가 몇 개 있는지 해쉬테이블로 변환하기
// // 2) 주어진 배열을 오름차순 정렬후 이분탐색으로 인덱스 찾기
// // 3) 이분탐색으로 찾은 인덱스에 해당하는 배열의 값을 key로 하는 해쉬테이블의 값(중복개수) 반환
// const solution = (rawInputs) => {
//   const answer = [];
//   const [n, arr, m, inputs] = rawInputs;
//   const N = Number(n);
//   const M = Number(m);
//   const sortedArr = arr
//     .split(' ')
//     .map((v) => +v)
//     .sort((a, b) => a - b);
//   const duplicatedCount = sortedArr.reduce((acc, cur) => {
//     if (acc[cur]) {
//       acc[cur] = acc[cur] + 1;
//     } else {
//       acc[cur] = 1;
//     }
//     return acc;
//   }, {});
//   const targetNumbers = inputs.split(' ').map((v) => +v);
//   targetNumbers.forEach((target) => {
//     const result = binarySearch(target, sortedArr);
//     if (result === null) {
//       answer.push(0);
//     } else {
//       const target = sortedArr[result];
//       answer.push(duplicatedCount[target]);
//     }
//   });
//   return answer.join(' ');
// };

const findLeftTarget = (target, sortedArr) => {
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
const findRightTarget = (target, sortedArr) => {
  let start = 0;
  let end = sortedArr.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

// 찾고자하는 수의 제일 왼쪽 위치와 제일 오른쪽 위치구하기
const solution = (rawInputs) => {
  const answer = [];
  const [n, arr, m, inputs] = rawInputs;
  const N = Number(n);
  const M = Number(m);
  const sortedArr = arr
    .split(' ')
    .map((v) => +v)
    .sort((a, b) => a - b);
  const targetNumbers = inputs.split(' ').map((v) => +v);
  targetNumbers.forEach((target) => {
    const low = findLeftTarget(target, sortedArr);
    const high = findRightTarget(target, sortedArr);
    answer.push(high - low);
  });
  return answer.join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
