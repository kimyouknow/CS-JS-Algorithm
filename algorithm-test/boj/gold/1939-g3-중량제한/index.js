const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1939-g3-중량제한/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const solution = (rawInputs) => {
  let [[n, m], ...arr] = rawInputs;
  const [x, y] = arr[m];
  let answer = 0;

  arr = arr.splice(0, m);

  const matrix = Array.from({ length: n + 1 }, () => []);
  let visited = Array.from({ length: n + 1 }, () => false);

  arr.forEach(([a, b, c]) => {
    matrix[a].push([b, c]);
    matrix[b].push([a, c]);
  });

  // recursion
  const dfs = (cur, w) => {
    if (visited[cur]) return false;
    visited[cur] = true;
    if (cur === y) {
      return true;
    }

    for (const [next, value] of matrix[cur]) {
      if (value < w) continue;
      if (dfs(next, w)) return true;
    }
    return false;
  };

  const bfs = (w) => {
    visited = Array.from({ length: n + 1 }, () => false);
    visited[x] = true;
    const queue = [x];

    while (queue.length > 0) {
      const cur = queue.shift();
      if (cur === y) return true;
      for (const [next, value] of matrix[cur]) {
        if (visited[next]) continue;
        if (value < w) continue;
        visited[next] = true;
        queue.push(next);
      }
    }

    return false;
  };

  let min = 1;
  let max = 1_000_000_000;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    visited = Array.from({ length: n + 1 }, () => false);
    const res = dfs(x, mid);
    // const res = bfs(mid);

    if (res) {
      // 목적지까지 도달 가능 => min증가
      answer = mid;
      min = mid + 1;
    } else {
      // 목적지까지 도달 불가능 => max감소
      max = mid - 1;
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
