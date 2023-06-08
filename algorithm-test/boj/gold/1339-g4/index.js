const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1339-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // 3트: 십의 자리 수를 활용 : 통과
// const solution = (rawInputs) => {
//   let [n, ...words] = rawInputs;
//   n = Number(n);
//   const keep = {};
//   const startNumber = 9;
//   words.forEach((word) => {
//     const length = word.length;
//     word.split('').forEach((letter, idx) => {
//       if (keep[letter]) {
//         keep[letter] += Math.pow(10, length - idx);
//       } else {
//         keep[letter] = Math.pow(10, length - idx);
//       }
//     });
//   });
//   const alphaMap = Object.entries(keep)
//     .sort((a, b) => b[1] - a[1])
//     .reduce((acc, cur, idx) => {
//       const [key] = cur;
//       acc[key] = startNumber - idx;
//       return acc;
//     }, {});
//   const answer = words.reduce((acc, cur) => {
//     const length = cur.length - 1;
//     const sum = cur
//       .split('')
//       .reduce((acc, cur, idx) => acc + alphaMap[cur] * Math.pow(10, length - idx), 0);
//     return acc + sum;
//   }, 0);
//   return answer;
// };

// 3트 결과를 정리
const solution = (rawInputs) => {
  let [n, ...words] = rawInputs;
  n = Number(n);
  const alphaMap = {};
  words.forEach((word) => {
    const length = word.length - 1;
    word.split('').forEach((letter, idx) => {
      if (alphaMap[letter]) alphaMap[letter] += Math.pow(10, length - idx);
      else alphaMap[letter] = Math.pow(10, length - idx);
    });
  });

  const alphaArr = Object.entries(alphaMap).sort((a, b) => b[1] - a[1]);
  //[key, value]

  let number = 9;
  let answer = 0;
  for (let i = 0; i < alphaArr.length; i++) {
    const [key, value] = alphaArr[i];
    answer += value * number--;
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
