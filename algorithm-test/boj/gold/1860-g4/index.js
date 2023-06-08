const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1860-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [inputs, arr] = rawInputs;
  const [N, S] = inputs;
  let answer = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let acc = 0;
  for (let right = 0; right < N; right++) {
    acc += arr[right];
    while (left <= right && left < N && acc >= S) {
      answer = Math.min(answer, right - left + 1);
      acc = acc - arr[left];
      left++;
    }
  }

  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
