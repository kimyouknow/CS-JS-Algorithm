const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2252-g3-줄세우기/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[n, m], ...arr] = rawInputs;
  const answer = [];
  const graph = Array.from({ length: n + 1 }, () => []);
  const indegreeTable = Array.from({ length: n + 1 }, () => 0);
  const queue = [];

  arr.forEach(([a, b]) => {
    indegreeTable[b]++;
    graph[a].push(b);
  });

  for (let i = 1; i < n + 1; i++) {
    if (indegreeTable[i] === 0) {
      queue.push(i);
    }
  }

  let idx = 0;
  while (queue.length > idx) {
    const a = queue[idx];
    answer.push(a);
    for (const b of graph[a]) {
      indegreeTable[b]--;
      if (indegreeTable[b] === 0) {
        queue.push(b);
      }
    }
    idx++;
  }

  return answer.join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
