const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1987-g4-알파벳/1.txt'))
  .toString()
  .trim()
  .split('\n');

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

const toASCII = (w) => w.charCodeAt() - 65;

const solution = (rawInputs) => {
  const [input, ...arr] = rawInputs;
  const [r, c] = input.split(' ').map((v) => +v);
  const board = arr.map((v) => v.split(''));

  let answer = 0;

  // const visited = Array.from({ length: r }, () => Array.from({ length: c }, () => false));
  // const set = new Set();
  // set.add(board[0][0]);
  // visited[0][0] = true;

  const alphabet = Array.from({ length: 26 }, () => false);
  alphabet[toASCII(board[0][0])] = true;

  const dfs = (cr, cc, idx) => {
    // if (set.size > answer) answer = set.size;
    if (idx > answer) answer = idx;

    for (let i = 0; i < 4; i++) {
      const nr = dr[i] + cr;
      const nc = dc[i] + cc;

      if (nr < 0 || nr >= r || nc < 0 || nc >= c) continue;
      // if (visited[nr][nc]) continue;
      // if (set.has(board[nr][nc])) continue;
      if (alphabet[toASCII(board[nr][nc])]) continue;

      // visited[nr][nc] = true;
      // set.add(board[nr][nc]);
      alphabet[toASCII(board[nr][nc])] = true;
      dfs(nr, nc, idx + 1);
      // visited[nr][nc] = false;
      // set.delete(board[nr][nc]);
      alphabet[toASCII(board[nr][nc])] = false;
    }
  };

  dfs(0, 0, 1);

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
