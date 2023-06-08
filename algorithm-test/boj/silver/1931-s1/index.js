const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../1931-s1/1.txt'))
  .toString()
  .trim()
  .split('\n');

const solution = (rawInputs) => {
  const [N, ...arrs] = rawInputs;
  const answer = [];
  const n = Number(N);
  const meetings = arrs
    .map((meeting) => meeting.split(' ').map((v) => +v))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let t = 0;
  for (let i = 0; i < N; i++) {
    const current = meetings[i];
    if (current[0] >= t) {
      answer.push(current);
      t = current[1];
    }
  }

  return answer.length;
};

console.log(solution(rawInputs));

module.exports = { solution };
