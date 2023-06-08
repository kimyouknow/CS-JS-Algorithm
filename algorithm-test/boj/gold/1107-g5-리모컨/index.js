const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1107-g5-리모컨/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // https://hagisilecoding.tistory.com/39 참고
// const solution = (rawInputs) => {
//   let answer = 0;
//   let [n, m, brokenArr] = rawInputs;
//   n = Number(n);
//   m = Number(m);

//   if (n === 100) return answer;

//   brokenArr = brokenArr === undefined ? [] : brokenArr.split(' ').map((v) => +v);
//   const maxNum = 1_000_001;
//   const channels = Array(maxNum).fill(true);

//   for (let i = 0; i < maxNum; i++) {
//     const cur = String(i).split('');
//     for (const w of cur) {
//       const target = brokenArr.findIndex((broken) => broken === Number(w));
//       if (target !== -1) {
//         channels[i] = false;
//         break;
//       }
//     }
//   }

//   channels[100] = true;

//   let minRes = maxNum;
//   let maxRes = maxNum;

//   for (let i = n; i >= 0; i--) {
//     if (channels[i]) {
//       minRes = i;
//       break;
//     }
//   }

//   for (let i = n; i < n + Math.abs(n - 100); i++) {
//     if (channels[i]) {
//       maxRes = i;
//       break;
//     }
//   }

//   minRes = Math.abs(minRes - n) + String(minRes).length;
//   maxRes = Math.abs(maxRes - n) + String(maxRes).length;

//   answer = Math.min(minRes, maxRes, Math.abs(100 - n));

//   return answer;
// };

// https://seol-limit.tistory.com/48 참고
const solution = (rawInputs) => {
  let answer = 0;
  let [n, m, arr] = rawInputs;
  n = Number(n);
  m = Number(m);

  if (n === 100) return answer;

  arr = arr === undefined ? [] : arr.split(' ').map((v) => +v);
  const maxNum = 1_000_000;

  const broken = Array(10).fill(false);
  arr.forEach((v) => (broken[v] = true));

  const move = (n) => {
    if (n === 0) return broken[n] ? 0 : 1;
    let len = 0;
    while (n > 0) {
      if (broken[n % 10]) {
        len = 0;
        break;
      }
      n = Math.floor(n / 10);
      len++;
    }
    return len;
  };

  answer = Math.abs(n - 100);
  for (let i = 0; i < maxNum; i++) {
    const len = move(i);
    if (len > 0) {
      answer = Math.min(Math.abs(i - n) + len, answer);
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
