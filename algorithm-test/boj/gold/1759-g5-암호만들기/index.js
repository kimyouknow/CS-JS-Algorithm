const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1759-g5-암호만들기/1.txt'))
  .toString()
  .trim()
  .split('\n');

const gathers = ['a', 'e', 'i', 'o', 'u'];

// // sol1:
// const solution = (rawInputs) => {
//   const [l, c] = rawInputs[0].split(' ').map((v) => +v);
//   const letters = rawInputs[1].split(' ').sort();
//   const answer = [];
//   const map = {};

//   // [모음, 자음]
//   const checkGathers = (letter) =>
//     gathers.find((g) => g === letter) === undefined ? [0, 1] : [1, 0];

//   const dfs = (idx, acc, counts) => {
//     if (acc.length >= l) {
//       if (counts[0] === 0) return;
//       if (counts[1] <= 1) return;
//       const ans = acc.join('');
//       if (map[ans]) return;
//       map[ans] = true;
//       answer.push(ans);
//       return;
//     }
//     for (let i = idx + 1; i < c; i++) {
//       const [gather, consonant] = checkGathers(letters[i]);
//       dfs(i, [...acc, letters[i]], [gather + counts[0], consonant + counts[1]]);
//       dfs(i, acc, counts);
//     }
//   };

//   const counts = checkGathers(letters[0]);
//   dfs(0, [letters[0]], counts);
//   dfs(0, [], [0, 0]);

//   return answer.join('\n');
// };

// sol2:
const solution = (rawInputs) => {
  const [l, c] = rawInputs[0].split(' ').map((v) => +v);
  const letters = rawInputs[1].split(' ').sort();
  const answer = [];
  const map = {};

  // [모음, 자음]
  const checkGathers = (letter) =>
    gathers.find((g) => g === letter) === undefined ? [0, 1] : [1, 0];

  const dfs = (idx, acc, counts) => {
    if (acc.length >= l) {
      if (counts[0] === 0) return;
      if (counts[1] <= 1) return;
      const ans = acc.join('');
      if (map[ans]) return;
      map[ans] = true;
      answer.push(ans);
      return;
    }
    for (let i = idx + 1; i < c; i++) {
      const [gather, consonant] = checkGathers(letters[i]);
      dfs(i, [...acc, letters[i]], [gather + counts[0], consonant + counts[1]]);
    }
  };

  dfs(-1, [], [0, 0]);

  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
