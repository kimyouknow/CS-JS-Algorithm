const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2015-g4-수들의합4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// const solution = (rawInputs) => {
//   const [[n, k], arr] = rawInputs;
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     let acc = 0;
//     for (let j = i; j < n; j++) {
//       acc += arr[j];
//       if (acc === k) answer++;
//     }
//   }
//   return answer;
// };

const solution = (rawInputs) => {
  const [[n, k], arr] = rawInputs;
  let answer = 0;
  let obj = {};
  let psum = Array.from({ length: n }, () => 0);
  psum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    psum[i] = psum[i - 1] + arr[i];
  }

  for (let i = 0; i < n; i++) {
    if (psum[i] === k) answer++;

    if (obj[psum[i] - k] === undefined) {
      obj[psum[i] - k] = 0;
    }
    answer += obj[psum[i] - k];
    if (obj[psum[i]] === undefined) {
      obj[psum[i]] = 0;
    }
    obj[psum[i]]++;
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
