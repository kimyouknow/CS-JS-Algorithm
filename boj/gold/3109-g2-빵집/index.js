const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../3109-g2-빵집/1.txt'))
  .toString()
  .trim()
  .split('\n');

const dr = [-1, 0, 1];
const dc = [1, 1, 1];

const solution = (rawInputs) => {
  let [inputs, ...map] = rawInputs;
  const [r, c] = inputs.split(' ').map((v) => +v);
  map = map.map((v) => v.split(''));
  let answer = 0;

  const dfsVer1 = (cr, cc, acc) => {
    if (cc === c - 1) return 1;

    for (let i = 0; i < 3; i++) {
      const nr = cr + dr[i];
      const nc = cc + dc[i];
      if (nr < 0 || nr >= r || nc < 0 || nc >= c) continue;
      if (map[nr][nc] !== '.') continue;
      map[nr][nc] = '#';

      // if (dfsVer1(nr, nc, acc) === 1) return 1;
      const res = dfsVer1(nr, nc, acc);
      // console.log('res, nr,nc', res, nr, nc);
      // return res;
    }

    return acc;
  };

  const dfsVer2 = (cr, cc) => {
    if (cc === c - 1) return true;

    for (let i = 0; i < 3; i++) {
      const nr = cr + dr[i];
      const nc = cc + dc[i];
      if (nr < 0 || nr >= r || nc < 0 || nc >= c) continue;
      if (map[nr][nc] !== '.') continue;
      map[nr][nc] = '#';

      if (dfsVer2(nr, nc)) return true;
    }

    return false;
  };

  for (let i = 0; i < r; i++) {
    // const res = dfsVer1(i, 0, 0);
    // answer += res;
    const res = dfsVer2(i, 0);
    console.log('res', res);
    console.log(map.map((v) => v.join('')).join('\n'));
    if (res) {
      answer++;
    }
  }

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
