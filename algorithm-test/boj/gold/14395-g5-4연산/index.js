const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../14395-g5-4연산/1.txt'))
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const calOrder = ['*', '+', '-', '/'];

const calMap = [
  (s) => s * s, // '*':
  (s) => s + s, // '+':
  (s) => s - s, // '-':
  (s) => s / s, // '/':
];

// // 방문처리 배열 선언
// const solution = (rawInputs) => {
//   const [s, t] = rawInputs;

//   if (s === t) return 0;

//   let answer = [-1];
//   // const visited = Array.from({ length: 10 ** 6 }, () => false); // 2076ms
//   // const visited = Array(10 ** 6); // 364ms
//   const visited = []; // 388ms

//   const queue = [];
//   let idx = 0;

//   const cal = (n, acc) => {
//     for (let i = 0; i < 4; i++) {
//       if (n === 0 && i === 3) continue; // 0으로 나누는 경우
//       const res = calMap[i](n);
//       if (visited[res]) continue;
//       visited[res] = true;
//       queue.push([res, ...acc, calOrder[i]]);
//     }
//   };

//   cal(s, []);

//   while (queue.length > idx) {
//     const [cur, ...acc] = queue[idx];
//     idx++;
//     if (cur === t) {
//       answer = acc;
//       break;
//     }
//     cal(cur, acc);
//   }

//   return answer.join('');
// };

// set. map으로 방문배열 만들기
const solution = (rawInputs) => {
  const [s, t] = rawInputs;

  if (s === t) return 0;

  let answer = [-1];
  // const visited = new Set();
  const visited = {};

  const queue = [];
  let idx = 0;

  const cal = (n, acc) => {
    for (let i = 0; i < 4; i++) {
      if (n === 0 && i === 3) continue; // 0으로 나누는 경우
      const res = calMap[i](n);
      if (visited[res]) continue;
      visited[res] = true;
      queue.push([res, ...acc, calOrder[i]]);
    }
  };

  cal(s, []);

  while (queue.length > idx) {
    const [cur, ...acc] = queue[idx];
    idx++;
    if (cur === t) {
      answer = acc;
      break;
    }
    cal(cur, acc);
  }

  return answer.join('');
};

console.log(solution(rawInputs));

module.exports = { solution };
