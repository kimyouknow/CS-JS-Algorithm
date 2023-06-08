const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../14567-g5-선수과목/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  const [[n, m], ...arr] = rawInputs;
  const indegreeTable = {};
  const graph = {};
  const queue = [];
  const answer = Array(n + 1).fill(1);

  arr.forEach(([a, b]) => {
    graph[a] = [];
    graph[b] = [];
    indegreeTable[a] = 0;
    indegreeTable[b] = 0;
  });

  arr.forEach(([a, b]) => {
    graph[a].push(b);
    indegreeTable[b]++;
  });

  Object.entries(indegreeTable).forEach(([key, value]) => {
    if (value === 0) queue.push([key, 1]);
  });

  while (queue.length > 0) {
    const [current, idx] = queue.shift();
    answer[current] = idx;

    // 해당 노드에서 연결된 노드의 진입차수를 명목상 1씩 줄이기
    // 줄인 노드의 진입차수가 0이면 해당 노드를 큐에 넣기
    for (const b of graph[current]) {
      indegreeTable[b]--;
      if (indegreeTable[b] === 0) {
        queue.push([b, idx + 1]);
      }
    }
  }

  return answer.slice(1).join(' ');
};

console.log(solution(rawInputs));

module.exports = { solution };
