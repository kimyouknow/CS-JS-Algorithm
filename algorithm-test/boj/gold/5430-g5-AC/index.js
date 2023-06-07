const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../5430-g5-AC/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // 배열에 직접 접근해서 pop, shift
// const solution = (orders, n, cases) => {
//   const queue =
//     Number(n) === 0
//       ? []
//       : cases
//           .slice(1, cases.length - 1)
//           .split(',')
//           .map((v) => +v);

//   let R = 0;
//   let isError = false;

//   for (const order of orders.split('')) {
//     if (order === 'R') {
//       R++;
//     } else {
//       if (queue.length <= 0) {
//         isError = true;
//         break;
//       }
//       if (R % 2 === 0) {
//         // queue의 첫 번째 제거
//         queue.shift();
//       } else {
//         // queue의 마지막 번째 제거
//         queue.pop();
//       }
//     }
//   }
//   if (isError) return 'error';
//   const res = R % 2 !== 0 ? queue.reverse() : queue;
//   return '[' + res.join(',') + ']';
// };

// 인덱스로 접근한 풀이 : 다른 사람 풀이에서 힌트를 얻음
const solution = (orders, n, cases) => {
  const queue =
    Number(n) === 0
      ? []
      : cases
          .slice(1, cases.length - 1)
          .split(',')
          .map((v) => +v);

  let l = 0;
  let r = n;
  let R = 0;
  let isError = false;

  for (const order of orders.split('')) {
    if (order === 'R') {
      R++;
    } else {
      if (l >= r) {
        isError = true;
        break;
      }
      if (R % 2 === 0) {
        // queue의 첫 번째 제거
        l++;
      } else {
        // queue의 마지막 번째 제거
        r--;
      }
    }
  }
  if (isError) return 'error';
  const res = R % 2 !== 0 ? queue.slice(l, r).reverse() : queue.slice(l, r);
  return '[' + res.join(',') + ']';
};

const getInputs = (rawInputs) => {
  const [n] = rawInputs;
  const answer = [];
  for (let i = 1; i < Number(n) * 3; i += 3) {
    const res = solution(rawInputs[i], rawInputs[i + 1], rawInputs[i + 2]);
    answer.push(res);
  }

  return answer.join('\n');
};

console.log(getInputs(rawInputs));

module.exports = { solution };
