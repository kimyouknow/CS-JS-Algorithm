const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../14888-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) =>
  a < 0 ? -1 * Math.floor((a * -1) / b) : Math.floor(a / b);

const operatorMap = [plus, minus, multiply, divide];

// const solution = (rawInputs) => {
//   let [n, numbers, operator] = rawInputs;
//   n = Number(n);
//   numbers = numbers.split(' ').map((v) => +v);
//   const operators = operator
//     .split(' ')
//     .map((v) => +v)
//     .reduce((acc, cur, idx) => {
//       acc.push(...Array(cur).fill(operatorMap[idx]));
//       return acc;
//     }, []);
//   let min = Number.MAX_SAFE_INTEGER;
//   let max = Number.MIN_SAFE_INTEGER;

//   const cal = (idx, acc, visited) => {
//     if (idx === n) {
//       if (acc <= min) min = acc;
//       if (acc >= max) max = acc;
//       return;
//     }
//     for (let i = 0; i < n - 1; i++) {
//       if (visited[i]) continue;
//       const oper = operators[i];
//       const res = oper(acc, numbers[idx]);
//       visited[i] = true;
//       cal(idx + 1, res, [...visited]);
//       visited[i] = false;
//     }
//   };

//   const visited = Array(operators.length).fill(false);
//   cal(1, numbers[0], visited);

//   return `${max}\n${min}`;
// };

const solution = (rawInputs) => {
  let [n, numbers, operators] = rawInputs;
  n = Number(n);
  numbers = numbers.split(' ').map((v) => +v);
  operators = operators.split(' ').map((v) => +v);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  const cal = (idx, acc) => {
    if (idx === n) {
      if (acc <= min) min = acc;
      if (acc >= max) max = acc;
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (operators[i] <= 0) continue;
      operators[i]--;
      const oper = operatorMap[i];
      const res = oper(acc, numbers[idx]);
      cal(idx + 1, res);
      operators[i]++;
    }
  };

  cal(1, numbers[0]);
  return `${max}\n${min}`;
};

console.log(solution(rawInputs));

module.exports = { solution };
