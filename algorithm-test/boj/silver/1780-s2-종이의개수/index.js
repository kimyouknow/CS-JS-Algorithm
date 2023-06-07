const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1780-s2-종이의개수/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// // 1트 통과
// const solution = (rawInputs) => {
//   const [[startN], ...arr] = rawInputs;
//   const answer = Array(3).fill(0); // -1, 0, 1

//   const count = (array, x, y) => {
//     if (arr[x][y] === -1) array[0] += 1;
//     else if (arr[x][y] === 0) array[1] += 1;
//     else array[2] += 1; // (array[x][y] === 1)
//   };

//   const dfs = (x, y, n) => {
//     if (n === 1) {
//       count(answer, x, y);
//       return;
//     }
//     const temp = Array(3).fill(0); // -1, 0, 1

//     for (let r = x; r < x + n; r++) {
//       for (let c = y; c < y + n; c++) {
//         count(temp, r, c);
//       }
//     }
//     const next = n / 3;
//     if (temp[0] === n * n) answer[0] += 1;
//     else if (temp[1] === n * n) answer[1] += 1;
//     else if (temp[2] === n * n) answer[2] += 1;
//     else {
//       for (let r = 0; r < 3; r++) {
//         for (let c = 0; c < 3; c++) {
//           dfs(x + next * r, y + next * c, next);
//         }
//       }
//     }
//   };

//   dfs(0, 0, startN);

//   return answer.join('\n');
// };

// 2트: 재귀마다 반복되는 함수 재귀 밖에서 선언하기
const solution = (rawInputs) => {
  const [[startN], ...arr] = rawInputs;
  const answer = Array(3).fill(0); // -1, 0, 1

  const count = (array, target) => {
    if (target === -1) array[0] += 1;
    else if (target === 0) array[1] += 1;
    else array[2] += 1; // (array[x][y] === 1)
  };

  const checkBox = (x, y, n) => {
    const init = arr[x][y];
    for (let r = x; r < x + n; r++) {
      for (let c = y; c < y + n; c++) {
        if (arr[r][c] !== init) {
          return false;
        }
      }
    }
    return true;
  };

  const dfs = (x, y, n) => {
    if (n === 1) {
      count(answer, arr[x][y]);
      return;
    }

    const next = n / 3;
    if (checkBox(x, y, n)) {
      const init = arr[x][y];
      count(answer, init);
    } else {
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          dfs(x + next * r, y + next * c, next);
        }
      }
    }
  };

  dfs(0, 0, startN);

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
