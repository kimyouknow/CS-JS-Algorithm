const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1916-g5/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

//   // bfs 실패
// const solution = (rawInputs) => {
//   const [[n], [m], ...arr] = rawInputs;
//   const [start, end] = arr[m];
//   const inputs = arr.slice(0, m);
//   let answer = Number.MAX_SAFE_INTEGER;
//   const table = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
//   const visited = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

//   inputs.forEach(([s, e, v]) => {
//     table[s][e] = Math.min(table[s][e], v);
//   });

//   const queue = [];
//   visited[start][0] = true;
//   queue.push([start, 0]);

//   while (queue.length > 0) {
//     const [cEnd, acc] = queue.shift();
//     if (cEnd === end) {
//       answer = Math.min(acc, answer);
//       continue;
//     }
//     for (let i = 1; i < n + 1; i++) {
//       if (cEnd === i || table[cEnd][i] === Number.MAX_SAFE_INTEGER) continue;
//       queue.push([i, acc + table[cEnd][i]]);
//     }
//   }

//   return answer;
// };

// bfs풀이 - 조건 재설정 ✅
const solution = (rawInputs) => {
  const [[n], [m], ...arr] = rawInputs;
  const [start, end] = arr[m];
  const inputs = arr.slice(0, m);
  const table = Array.from({ length: n + 1 }, () => []);
  const dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);

  // start -> end, cost를 넣기, 중복되는 경로가 있으므로 배열로 초기화
  inputs.forEach(([s, e, v]) => {
    table[s].push([e, v]);
  });

  const queue = [];
  dp[start] = 0;
  queue.push([start, 0]);

  while (queue.length > 0) {
    const [cEnd, acc] = queue.shift();
    if (acc > dp[cEnd]) continue;
    for (const [e, cost] of table[cEnd]) {
      // 현재 누적값과 새로 갈 경로의 값의 합이 이미 간 경로보다 작을 때만 큐에 넣기
      if (dp[cEnd] + cost < dp[e]) {
        dp[e] = dp[cEnd] + cost;
        queue.push([e, dp[e]]);
      }
    }
  }

  return dp[end];
};

console.log(solution(rawInputs));

module.exports = { solution };
