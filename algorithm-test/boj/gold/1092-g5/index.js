const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1092-g5/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// // 투포인터: 틀렸습니다.
// const solution = (rawInputs) => {
//   let [[n], cranes, [m], boxes] = rawInputs;
//   let answer = 0;
//   cranes = cranes.sort((a, b) => b - a);
//   boxes = boxes.sort((a, b) => b - a);
//   let b = 0;
//   let c = 0;
//   let prevB = -1;
//   if (cranes[c] < boxes[b]) return -1;
//   while (b < boxes.length) {
//     if (cranes[c] >= boxes[b]) {
//       prevB = b;
//       b++;
//       c++;
//     } else {
//       if (boxes[prevB] === boxes[b]) {
//         boxes.push(boxes[prevB]);
//         b++;
//         continue;
//       }
//       c++;
//     }
//     if (c === n) {
//       c = 0;
//       answer++;
//     }
//   }
//   answer++;
//   if (c === 0) {
//     answer -= 2;
//   }

//   return answer;
// };

// 2중for문 ✅
const solution = (rawInputs) => {
  let [[n], cranes, [m], boxes] = rawInputs;
  let answer = 0;
  cranes = cranes.sort((a, b) => b - a);
  boxes = boxes.sort((a, b) => b - a);
  if (cranes[0] < boxes[0]) return -1;
  while (boxes.length > 0) {
    for (let i = 0; i < n; i++) {
      //크레인
      for (let j = 0; j < boxes.length; j++) {
        // 박스
        if (cranes[i] >= boxes[j]) {
          boxes.splice(j, 1); //j번째 상자 제거
          break;
        }
      }
    }
    answer++;
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
