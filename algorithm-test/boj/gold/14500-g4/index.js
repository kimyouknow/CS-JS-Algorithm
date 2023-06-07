const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../14500-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const solution = (rawInputs) => {
  const [[n, m], ...arr] = rawInputs;
  let answer = Number.MIN_SAFE_INTEGER;
  const visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  const getSum = (idx, acc, c, r) => {
    if (idx > 4) return;
    if (idx === 4) {
      answer = Math.max(answer, acc);
      return;
    }
    for (let i = 0; i < 4; i++) {
      const nextC = c + dy[i];
      const nextR = r + dx[i];
      if (nextC < 0 || nextR < 0 || nextC >= n || nextR >= m || visited[nextC][nextR]) continue;
      visited[nextC][nextR] = true;
      const nextAcc = acc + arr[nextC][nextR];
      if (idx === 2) {
        // ㅗ, ㅜ, ㅓ, ㅏ 모양 만들기
        // 새로운 좌표가 아닌 기존 좌표로 돌아와서 탐색하기
        getSum(idx + 1, nextAcc, c, r);
        visited[nextC][nextR] = false;
      }
      getSum(idx + 1, nextAcc, nextC, nextR);
      visited[nextC][nextR] = false;
    }
  };

  for (let c = 0; c < n; c++) {
    for (let r = 0; r < m; r++) {
      visited[c][r] = true;
      getSum(1, arr[c][r], c, r);
      visited[c][r] = false;
    }
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
