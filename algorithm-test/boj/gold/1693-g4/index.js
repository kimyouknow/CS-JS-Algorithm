const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1693-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' '));

const replaceAt = (string, index, replacement) =>
  string.substring(0, index) + replacement + string.substring(index + 1);

const solution = (rawInputs) => {
  const [n, ...inputs] = rawInputs;
  const answer = [];

  const initPrimes = () => {
    const primes = [];
    const start = 1_000;
    const end = 10_000;
    const range = Array(end + 1).fill(false);
    for (let i = 2; i < end + 1; i++) {
      if (range[i]) continue;
      for (let j = 2 * i; j < end + 1; j += i) {
        if (range[j]) continue;
        range[j] = true;
      }
    }
    // 1,000미만은 방문처리
    for (let i = 0; i < start + 1; i++) {
      range[i] = true;
    }
    return [...range];
  };

  const getChangeCount = (start, end) => {
    const range = initPrimes(); // visited
    let count = -1;
    const queue = [];
    queue.push([0, start]);
    while (queue.length > 0) {
      const [idx, current] = queue.shift();
      if (Number(current) === Number(end)) {
        count = idx;
        break;
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 10; j++) {
          // current에서 i번째 숫자를 j로 바꾸기
          const replacement = Number(replaceAt(current, i, j));
          if (range[replacement]) continue; //이미 방문한 기록있으면 실행 x,
          range[replacement] = true;
          queue.push([idx + 1, String(replacement)]);
        }
      }
    }
    return count === -1 ? 'Impossible' : count;
  };
  inputs.forEach(([start, end]) => {
    answer.push(getChangeCount(start, end));
  });

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
