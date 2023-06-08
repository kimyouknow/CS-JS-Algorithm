const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1920-s4/1.txt'))
  .toString()
  .trim()
  .split('\n');

const binarySearch = (target, sortedArr) => {
  const binaryRecursion = (start, end) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const midValue = sortedArr[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      return binaryRecursion(mid + 1, end);
    } else if (midValue > target) {
      return binaryRecursion(start, mid - 1);
    }
  };
  const start = 0;
  const end = sortedArr.length - 1;
  return binaryRecursion(start, end);
};

const solution = (rawInputs) => {
  const answer = [];
  const [n, arr, m, inputs] = rawInputs;
  const N = Number(n);
  const M = Number(m);
  const sortedArr = arr
    .split(' ')
    .map((v) => +v)
    .sort((a, b) => a - b);
  const targetNumbers = inputs.split(' ').map((v) => +v);
  targetNumbers.forEach((target) => {
    const result = binarySearch(target, sortedArr);
    if (result === null) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  });
  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
