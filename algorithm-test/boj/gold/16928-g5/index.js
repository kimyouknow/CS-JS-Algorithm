const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../16928-g5/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// // 재귀(dfs)
// const solution = (rawInputs) => {
//   const [[n, m], ...arr] = rawInputs;
//   let answer = Number.MAX_SAFE_INTEGER;
//   const visited = Array.from({ length: 101 }, () => false);

//   const move = (idx, cur) => {
//     if (cur === 100) {
//       if (answer > idx) {
//         answer = idx;
//       }
//       return;
//     }
//     for (let i = 1; i < 7; i++) {
//       const next = cur + i;
//       if (next > 100) return;
//       if (visited[next]) continue;
//       const found = arr.find((ele) => ele[0] === next);
//       if (found === undefined) {
//         visited[next] = true;
//         move(idx + 1, next);
//       } else {
//         const [start, end] = found;
//         if (visited[start] || visited[end]) continue;
//         visited[start] = true;
//         move(idx + 1, end);
//       }
//     }
//   };

//   visited[1] = true;
//   move(0, 1);

//   return answer;
// };

// bfs
const solution = (rawInputs) => {
  const [[n, m], ...arr] = rawInputs;
  let answer = Number.MAX_SAFE_INTEGER;
  const visited = Array.from({ length: 101 }, () => false);

  const queue = [];
  visited[1] = true;
  queue.push([0, 1]);
  while (queue.length > 0) {
    const [idx, cur] = queue.shift();
    if (cur > 100) break;
    if (cur === 100) {
      answer = idx;
      break;
    }
    for (let i = 1; i < 7; i++) {
      const next = cur + i;
      if (visited[next]) continue;
      const found = arr.find((e) => e[0] === next);
      if (found) {
        const [start, end] = found;
        visited[start] = true;
        visited[end] = true;
        1;
        queue.push([idx + 1, end]);
        continue;
      }
      visited[next] = true;
      queue.push([idx + 1, next]);
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
