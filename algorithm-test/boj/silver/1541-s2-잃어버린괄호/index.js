const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1541-s2-잃어버린괄호/1.txt'))
  .toString()
  .trim();

// // 1자리씩 파싱 ✅
// const solution = (inputs) => {
//   const n = inputs.length;
//   let answer = 0;
//   let temp = '';
//   let isMinus = false;
//   let idx = 0;
//   while (idx < n + 1) {
//     if (inputs[idx] === '+' || inputs[idx] === '-' || idx === n) {
//       if (isMinus) {
//         answer -= Number(temp);
//       } else {
//         answer += Number(temp);
//       }
//       temp = '';
//     } else {
//       temp += inputs[idx];
//     }
//     if (inputs[idx] === '-') {
//       isMinus = true;
//     }
//     idx++;
//   }

//   return answer;
// };

// 기호에 따라 파싱
// -로 묶어야 하니가 -로 구분한 뒤
// 각 배열의 요소 합 구하기
const solution = (inputs) =>
  inputs
    .split('-')
    .map((e) => e.split('+').reduce((acc, cur) => acc + Number(cur), 0))
    .reduce((acc, cur) => acc - cur);

console.log(solution(rawInputs));

module.exports = { solution };
