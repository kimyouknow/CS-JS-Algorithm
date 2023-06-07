const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../9019-g4-DSLR/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

const powers = [1, 10, 100, 1000];

const numToArr = (n) => {
  const arr = Array(4).fill(0);
  for (let i = 0; i < 4; i++) {
    arr[i] = Math.floor(n / powers[3 - i]);
    n = n % powers[3 - i];
  }
  return arr;
};

const ordersKey = ['D', 'S', 'L', 'R'];

const orders = [
  (n) => (n * 2) % 10000, // D
  (n) => (n === 0 ? 9999 : n - 1), // S
  (n) => (n % 1000) * 10 + Math.floor(n / 1000), // L
  (n) => (n % 10) * 1000 + Math.floor(n / 10), //R
  // (n) => {
  //   const arr = numToArr(n);
  //   const temp = arr[0];
  //   for (let i = 0; i < 4; i++) {
  //     arr[i] = arr[i + 1];
  //   }
  //   arr[3] = temp;
  //   return Number(arr.join(''));
  // }, // L
  // (n) => {
  //   const arr = numToArr(n);
  //   const temp = arr[3];
  //   for (let i = 3; i > 0; i--) {
  //     arr[i] = arr[i - 1];
  //   }
  //   arr[0] = temp;
  //   return Number(arr.join(''));
  // }, // R
];

// 시간초과 -> L,R 명령어 수정
const solution = ([a, b]) => {
  let res = '';
  const queue = [];
  const visited = Array.from({ length: 10000 }, () => false);

  queue.push([a, res]);
  visited[a] = true;

  let idx = 0;

  while (queue.length > idx) {
    const [curA, key] = queue[idx];
    idx++;
    if (curA === b) {
      res = key;
      break;
    }
    for (let i = 0; i < 4; i++) {
      const nextA = orders[i](curA);
      if (visited[nextA]) continue;
      visited[nextA] = true;
      queue.push([nextA, key + ordersKey[i]]);
    }
  }
  return res;
};

// // orders풀어쓰기
// const solution = ([a, b]) => {
//   let res = '';
//   const queue = [];
//   const visited = Array.from({ length: 10000 }, () => false);

//   queue.push([a, res]);
//   visited[a] = true;

//   while (queue.length > 0) {
//     let [curA, key] = queue.shift();
//     if (curA === b) {
//       res = key;
//       break;
//     }

//     const nextD = (curA * 2) % 10000;
//     if (!visited[nextD]) {
//       visited[nextD] = true;
//       queue.push([nextD, key + 'D']);
//     }

//     const nextS = curA === 0 ? 9999 : curA - 1;
//     if (!visited[nextS]) {
//       visited[nextS] = true;
//       queue.push([nextS, key + 'S']);
//     }

//     const nextL = (curA % 1000) * 10 + Math.floor(curA / 1000);
//     if (!visited[nextL]) {
//       visited[nextL] = true;
//       queue.push([nextL, key + 'L']);
//     }

//     const nextR = (curA % 10) * 1000 + Math.floor(curA / 10);
//     if (!visited[nextR]) {
//       visited[nextR] = true;
//       queue.push([nextR, key + 'R']);
//     }
//   }
//   return res;
// };

const preSolution = (rawInputs) => {
  const [[n], ...inputs] = rawInputs;

  const answer = [];

  inputs.forEach((input) => {
    const res = solution(input);
    answer.push(res);
  });

  return answer.join('\n');
};

console.log(preSolution(rawInputs));

module.exports = { solution };
