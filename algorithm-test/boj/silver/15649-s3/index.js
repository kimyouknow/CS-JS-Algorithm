const path = require('path');
const fs = require('fs');
const [N, M] = fs
  .readFileSync(path.resolve(__dirname, '../15649-s3/1.txt'))
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const solution = (n, m) => {
  const arr = Array(n + 1).fill(false);
  const answer = [];
  const recursion = (idx, visited, acc) => {
    if (idx >= m) {
      answer.push(acc.join(' '));
      return;
    }
    for (let i = 1; i < n + 1; i++) {
      if (visited[i]) continue;
      const newVisited = [...visited];
      newVisited[i] = true;
      recursion(idx + 1, newVisited, [...acc, i]);
    }
  };

  recursion(0, arr, []);
  return answer.join('\n');
};

console.log(solution(N, M));

module.exports = { solution };
