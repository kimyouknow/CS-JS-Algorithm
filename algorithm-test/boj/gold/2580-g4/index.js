const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../2580-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// // 1트 & 2트
// const solution = (map) => {
//   const empties = [];
//   const visited = Array.from({ length: 9 }, () => false);

//   const search = (r, c) => {
//     // const visited = Array.from({ length: 9 }, () => false); => 시간초과 원인
//     for (let i = 0; i < 9; i++) {
//       // 가로
//       if (map[r][i] !== 0) {
//         visited[map[r][i] - 1] = true;
//       }
//       // 세로
//       if (map[i][c] !== 0) {
//         visited[map[i][c] - 1] = true;
//       }
//     }
//     // 3 * 3
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         const target = map[Math.floor(r / 3) * 3 + i][Math.floor(c / 3) * 3 + j];
//         if (target !== 0) {
//           visited[target - 1] = true;
//         }
//       }
//     }

//     const res = [];
//     for (let i = 0; i < 9; i++) {
//       if (!visited[i]) res.push(i + 1);
//       visited[i] = false;
//     }
//     return res;
//   };

//   for (let r = 0; r < 9; r++) {
//     for (let c = 0; c < 9; c++) {
//       if (map[r][c] === 0) {
//         empties.push([r, c]);
//       }
//     }
//   }

//   let answer = [];

//   const dfs = (idx) => {
//     if (idx >= empties.length) {
//       answer = map.map((e) => e.join(' ')).join('\n');
//       return;
//     }
//     const [r, c] = empties[idx];
//     const res = search(r, c);
//     if (res.length === 0) return;
//     for (const target of res) {
//       map[r][c] = target;
//       dfs(idx + 1);
//       map[r][c] = 0;
//     }
//   };

//   dfs(0);

//   return answer;
// };

// 3트
const solution = (map) => {
  const empties = [];

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (map[r][c] === 0) {
        empties.push([r, c]);
      }
    }
  }

  const checkTarget = (r, c, target) => {
    for (let i = 0; i < 9; i++) {
      // 가로, 세로
      if (map[r][i] === target || map[i][c] === target) return false;
    }
    // 3 * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cur = map[Math.floor(r / 3) * 3 + i][Math.floor(c / 3) * 3 + j];
        if (cur === target) return false;
      }
    }

    return true;
  };

  let answer = [];

  const dfs = (idx) => {
    if (idx >= empties.length) {
      answer = map.map((e) => e.join(' ')).join('\n');
      return;
    }
    const [r, c] = empties[idx];

    for (let i = 1; i <= 9; i++) {
      if (checkTarget(r, c, i)) {
        map[r][c] = i;
        dfs(idx + 1);
        map[r][c] = 0;
      }
    }
  };

  dfs(0);

  return answer;
};

console.time();
console.log(solution(rawInputs));
console.timeEnd();

module.exports = { solution };
