const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../TopologicalSort/input.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// 입력 예시
// a -> b
// 1 2
// 1 5
// 2 3
// 3 4
// 4 6
// 5 6
// 6 7

const topologySort = (arr) => {
  const answer = [];
  const queue = []; // TODO: queue구현해서 수정하기
  const n = arr.length;
  const graph = {};
  const indegreeTable = {};

  // 그래프의 인접리스트와 진입차수 테이블 초기화
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

  // 진입차수가 0인 정점 큐에 넣기
  Object.entries(indegreeTable).forEach(([key, value]) => {
    if (value === 0) queue.push(key);
  });

  while (queue.length > 0) {
    const current = queue.shift();
    answer.push(current);

    // 해당 노드에서 연결된 노드의 진입차수를 명목상 1씩 줄이기
    // 줄인 노드의 진입차수가 0이면 해당 노드를 큐에 넣기
    for (const b of graph[current]) {
      indegreeTable[b]--;
      if (indegreeTable[b] === 0) {
        queue.push(b);
      }
    }
  }

  return answer.join(' ');
};

console.log(topologySort(rawInputs));

module.exports = { topologySort };
