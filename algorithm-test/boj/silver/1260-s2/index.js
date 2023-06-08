const path = require('path');
const fs = require('fs');
const [targetInputs, ...rest] = fs
  .readFileSync(path.resolve(__dirname, `../1260-s2/1.txt`))
  .toString()
  .trim()
  .split('\n');

const solution = (inputs, arr) => {
  const [n, m, v] = inputs.split(' ').map((v) => +v);
  const visited_dfs = Array(n + 1).fill(false);
  const visited_bfs = Array(n + 1).fill(false);
  const answer_dfs = [];
  const answer_bfs = [];

  const adjList = Array(n + 1)
    .fill(0)
    .map(() => []);

  arr
    .map((ele) => ele.split(' ').map((v) => +v))
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .map((ele) => {
      const [x, y] = ele;
      adjList[x].push(y);
      adjList[y].push(x);
    });

  adjList.forEach((ele) => ele.sort((a, b) => a - b));

  const dfs = (idx) => {
    if (visited_dfs[idx]) return;
    visited_dfs[idx] = true;
    answer_dfs.push(idx);
    adjList[idx].forEach((vertex) => {
      dfs(vertex);
    });
  };

  const bfs = (idx) => {
    visited_bfs[idx] = true;
    const Queue = [];
    Queue.push(idx);
    while (Queue.length > 0) {
      const current = Queue.shift();
      answer_bfs.push(current);
      adjList[current].forEach((vertex) => {
        if (!visited_bfs[vertex]) {
          Queue.push(vertex);
          visited_bfs[vertex] = true;
        }
      });
    }
  };

  dfs(v);
  bfs(v);

  return answer_dfs.join(' ') + '\n' + answer_bfs.join(' ');
};

// console.log(solution(targetInputs, rest));

module.exports = { solution };
