const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../7785-s5/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [n, ...arr] = rawInputs;
  const N = Number(n);
  const employeeObj = arr
    .map((e) => e.split(' '))
    .reduce((acc, cur) => {
      const [name, status] = cur;
      if (!acc[name]) {
        acc[name] = 1;
        return acc;
      }
      if (acc[name] === 1) {
        acc[name] = 0;
      }
      return acc;
    }, {});

  const answer = Object.entries(employeeObj)
    .filter(([key, value]) => value === 1)
    .map(([key, value]) => key)
    .sort()
    .reverse()
    .join('\n');
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
