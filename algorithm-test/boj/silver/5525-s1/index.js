const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../5525-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const unit = 'OI';

// // 1트: 시간초과
// const solution = (rawInputs) => {
//   let [n, m, s] = rawInputs;
//   const N = Number(n);
//   const M = Number(m);
//   const pn = Array(N)
//     .fill(0)
//     .reduce((acc) => acc + unit, 'I');
//   const len = pn.length; // N * 2 + 1
//   let answer = 0;

//   if (len > M) return answer;

//   for (let i = 0; i <= M - len; i++) {
//     let isSame = true;
//     inner: for (let j = 0; j < len; j++) {
//       if (s[i + j] !== pn[j]) {
//         isSame = false;
//         break inner;
//       }
//     }
//     if (isSame) answer++;
//   }

//   return answer;
// };

const solution = (rawInputs) => {
  let [n, m, s] = rawInputs;
  const N = Number(n);
  const M = Number(m);
  let answer = 0;
  let acc = 0;
  let i = 0;
  while (i < M - 1) {
    if (s.slice(i, i + 3) === 'IOI') {
      i += 2;
      acc++;
      if (acc === N) {
        answer++;
        acc--;
      }
    } else {
      i++;
      acc = 0;
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
