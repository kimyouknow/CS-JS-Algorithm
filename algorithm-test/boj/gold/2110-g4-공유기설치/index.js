const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2110-g4-공유기설치/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [inputs, ...arr] = rawInputs;
  const [n, c] = inputs.split(' ').map((v) => +v);
  const asc = arr.map((v) => +v).sort((a, b) => a - b);
  let answer = -1;

  // m=diff 간격으로 정렬된 집 배열을 선형탐색 했을 때 공유기 설치 개수
  const calc = (diff) => {
    let end = asc[0];
    let count = 1;

    for (let i = 0; i < asc.length; i++) {
      if (asc[i] - end >= diff) {
        count++;
        end = asc[i];
      }
    }

    return count;
  };

  let s = 0;
  let e = asc[n - 1];
  while (s <= e) {
    const m = Math.floor((s + e) / 2);
    const k = calc(m); //  m간격으로 정렬된 집 배열을 선형탐색 했을 때 공유기 설치 개수
    if (k < c) {
      e = m - 1;
    } else {
      answer = m;
      s = m + 1;
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
