const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1744-g4-수묶기/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const solution = (rawInputs) => {
  const [n, ...arr] = rawInputs;
  const negatives = [];
  const positives = [];
  let isZero = false;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      negatives.push(arr[i]);
    } else if (arr[i] > 0) {
      positives.push(arr[i]);
    } else {
      isZero = true;
    }
  }
  negatives.sort((a, b) => a - b);
  positives.sort((a, b) => b - a);

  let lastNegative = 0;
  for (let i = 0; i < negatives.length; i++) {
    if (i % 2 !== 0) {
      answer += negatives[i - 1] * negatives[i];
    } else {
      if (i === negatives.length - 1) {
        lastNegative = negatives[i];
      }
    }
  }

  if (!isZero) {
    answer += lastNegative;
  }

  for (let i = 0; i < positives.length; i++) {
    if (i % 2 !== 0) {
      if (positives[i - 1] === 1 || positives[i] === 1) {
        answer += positives[i - 1] + positives[i];
      } else {
        answer += positives[i - 1] * positives[i];
      }
    } else {
      if (i === positives.length - 1) {
        answer += positives[i];
      }
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
