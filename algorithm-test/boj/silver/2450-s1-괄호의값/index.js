const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2450-s1-괄호의값/1.txt'))
  .toString()
  .trim();

// 블로그 힌트: 중복연산을 미리 계산하기 (연산 분배)
const solution = (s) => {
  const stack = [];
  const length = s.length;
  let temp = 1;
  let answer = 0;
  for (let i = 0; i < length; i++) {
    if (s[i] === '(') {
      temp *= 2;
      stack.push('(');
    } else if (s[i] === '[') {
      temp *= 3;
      stack.push('[');
    } else if (s[i] === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== '(') {
        // 올바르지 못함
        answer = 0;
        break;
      }
      if (s[i - 1] === '(') {
        answer += temp;
        temp /= 2;
        stack.pop();
      } else {
        temp /= 2;
        stack.pop();
      }
    } else if (s[i] === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') {
        // 올바르지 못함
        answer = 0;
        break;
      }
      if (s[i - 1] === '[') {
        answer += temp;
        temp /= 3;
        stack.pop();
      } else {
        temp /= 3;
        stack.pop();
      }
    }
  }

  if (stack.length !== 0) return 0;

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
