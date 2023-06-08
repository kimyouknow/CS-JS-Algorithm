const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../2295-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const binarySearch = (target, arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midValue = arr[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return null;
};

// // 1트 3중for문으로 숫자의 합을 이분탐색
// const solution = (rawInputs) => {
//   const [N, ...arr] = rawInputs;
//   const sortedArr = arr.sort((a, b) => a - b);
//   let answer = 0;
//   for (let x = N - 1; x >= 0; x--) {
//     for (let y = N - 1; y >= 0; y--) {
//       for (let z = N - 1; z >= 0; z--) {
//         const sum = arr[x] + arr[y] + arr[z];
//         const targetIdx = binarySearch(sum, sortedArr);
//         if (targetIdx) {
//           if (answer <= sortedArr[targetIdx]) {
//             answer = sortedArr[targetIdx];
//           }
//         }
//       }
//     }
//   }
//   return answer;
// };

// 2트 두 원소의 합을 묶어 놓은 배열(two)을 미리 만들고 원본배열에서 요소하나를 뺀 값이 two에 있는지 확인
const solution = (rawInputs) => {
  const [N, ...arr] = rawInputs;
  const sortedArr = arr.sort((a, b) => a - b);
  const twoSum = [];
  let answer = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      twoSum.push(sortedArr[x] + sortedArr[y]);
    }
  }
  const sortedTwoSum = twoSum.sort((a, b) => a - b);
  for (let k = N - 1; k >= 0; k--) {
    for (let z = 0; z < k; z++) {
      const target = sortedArr[k] - sortedArr[z];
      const result = binarySearch(target, sortedTwoSum);
      if (result !== null) {
        return sortedArr[k];
      }
    }
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
