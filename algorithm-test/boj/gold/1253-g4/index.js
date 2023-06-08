const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1253-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// // 투포인터 세부구현 실패, 찾고자하는 값, 두 수 모두 포인터로 찾기(3 포인터)
// const solution = (rawInputs) => {
//   const [[n], arr] = rawInputs;
//   const sorted = arr.sort((a, b) => a - b);
//   let answer = 0;

//   // n >= 2
//   let l = 0;
//   let r = 1;
//   let k = 1;
//   while (l < n - 2) {
//     const current = sorted[l] + sorted[r];
//     const target = sorted[k];
//     if (l === n - 3 && r === n - 2 && k === n - 1) break;
//     if (current === target) {
//       answer++;
//       if (k < n - 1) {
//         k++;
//         continue;
//       }
//       if (l < r - 1) l++;
//     } else if (current > target) {
//       if (k < n - 1) k++;
//       if (l < r - 1) l++;
//     } else {
//       // current > target
//       if (k < n - 1) {
//         k++;
//         continue;
//       }
//       if (r + 1 >= k) {
//         l++;
//       } else {
//         r++;
//       }
//     }
//   }

//   return answer;
// };

// 투포인터 세부구현 성공, 찾고자하는 값은 for문으로 모두 돌리기 -> for문 내부에서 양 끝 값으로 투포인터
const solution = (rawInputs) => {
  const [[n], arr] = rawInputs;
  const sorted = arr.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = n - 1;
    const target = sorted[i];
    while (left < right) {
      const current = sorted[left] + sorted[right];
      if (left === i) {
        left++;
        continue;
      }
      if (right === i) {
        right--;
        continue;
      }
      if (target > current) {
        left++;
      } else if (target < current) {
        right--;
      } else {
        // target === current
        answer++;
        break;
      }
    }
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
