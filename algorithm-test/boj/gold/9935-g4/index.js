const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../9935-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

// 메모리 초과
// const solution = (rawInputs) => {
//   const [input, target] = rawInputs;
//   let word = input.split('');
//   let answer = '';
//   while (true) {
//     let idx = 0;
//     let prev = [...word];
//     for (let i = 0; i <= word.length; i++) {
//       if (idx === target.length) {
//         for (let j = i - idx; j < i; j++) {
//           word[j] = '';
//         }
//         idx = 0;
//       }
//       if (word[i] === target[idx]) {
//         idx++;
//       }
//     }
//     word = [...word.filter((w) => w !== '')];
//     if (word.join('') === prev.join('')) {
//       answer = word.filter((w) => w !== '').join('');
//       break;
//     }
//   }
//   return answer === '' ? 'FRULA' : answer;
// };

// // javascript replace활용 메모리 초과
// const solution = (rawInputs) => {
//   const [input, target] = rawInputs;
//   let answer = input;
//   while (true) {
//     let next = answer.replaceAll(target, '');
//     if (answer === next) {
//       break;
//     }
//     answer = next;
//   }
//   return answer === '' ? 'FRULA' : answer;
// };

// 스택
const solution = (rawInputs) => {
  const [input, bomb] = rawInputs;
  const stack = [];
  const bombSize = bomb.length;
  for (let i = 0; i < input.length; i++) {
    stack.push(input[i]);
    if (stack.length >= bombSize) {
      let flag = true;
      for (let j = 0; j < bombSize; j++) {
        if (stack[stack.length - bombSize + j] !== bomb[j]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        for (let j = 0; j < bombSize; j++) {
          stack.pop();
        }
      }
    }
  }
  const answer = stack.join('');
  return answer === '' ? 'FRULA' : answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
