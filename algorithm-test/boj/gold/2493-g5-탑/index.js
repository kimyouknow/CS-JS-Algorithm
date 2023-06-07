const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2493-g5-탑/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// // 반대로 탐색(오 -> 왼)
// const solution = (rawInputs) => {
//   const [[n], arr] = rawInputs;
//   const stack = [];
//   const answer = Array.from({ length: n }, () => 0);
//   let i = n - 1;
//   while (i >= 0) {
//     if (stack.length === 0) {
//       stack.push(i);
//       i--;
//       continue;
//     }
//     const target = arr[i];
//     const last = stack[stack.length - 1];
//     if (arr[last] > target) {
//       stack.push(i);
//       i--;
//     } else {
//       answer[last] = i + 1;
//       stack.pop();
//     }
//   }
//   return answer.join(' ');
// };

// 정방향 탐색(왼 -> 오)
const solution = (rawInputs) => {
  const [[n], arr] = rawInputs;
  const stack = [];
  const answer = Array.from({ length: n }, () => 0);
  let i = 0;
  while (i < n) {
    if (stack.length === 0) {
      stack.push(i);
      i++;
      continue;
    }
    const target = arr[i];
    const last = stack[stack.length - 1];
    if (arr[last] < target) {
      stack.pop();
    } else {
      answer[i] = last + 1;
      stack.push(i);
      i++;
    }
  }
  return answer.join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
