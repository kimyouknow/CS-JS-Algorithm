const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../4195-g2-친구네트워크/1.txt'))
  .toString()
  .trim()
  .split('\n');

// // 1트 메모리 초과 ->  network 객체의 key,vaLue를 string 값 그대로 사용
// const solution = (arr) => {
//   const inputs = arr.map((v) => v.split(' '));

//   const answer = [];
//   const network = {};

//   const getParent = (t) => {
//     let x = t;
//     while (network[x] !== x) {
//       x = network[x];
//     }
//     return x;
//   };

//   const union = (x, y) => {
//     const px = getParent(x);
//     const py = getParent(y);
//     if (px < py) {
//       network[py] = px;
//       return px;
//     } else {
//       network[px] = py;
//       return py;
//     }
//   };

//   // const count = (root) =>
//   //   Object.entries(network).reduce((acc, cur) => {
//   //     const [key, value] = cur;
//   //     if (value === root) return acc + 1;
//   //     return acc;
//   //   }, 0);

//   const count = (root) => {
//     let c = 0;
//     for (const value of Object.values(network)) {
//       if (value === root) c++;
//     }
//     return c;
//   };

//   inputs.forEach(([x, y]) => {
//     if (network[x] === undefined) {
//       network[x] = x;
//     }
//     if (network[y] === undefined) {
//       network[y] = y;
//     }
//     const root = union(x, y);
//     answer.push(count(root));
//   });

//   return answer;
// };

// 2트 메모리 해결 ->  network 객체의 key: string,value를 고유 번호
const solution = (arr, n) => {
  const inputs = arr.map((v) => v.split(' '));
  const answer = [];
  const network = {};
  const sizes = Array.from({ length: n * 2 + 1 }, () => 1);
  const links = Array.from({ length: n * 2 + 1 }, (v, i) => i);

  const find = (x) => {
    if (links[x] === x) return x;
    else return find(links[x]);
  };

  const union = (x, y) => {
    const px = find(x);
    const py = find(y);

    if (px !== py) {
      // 사이즈가 큰 쪽으로 합치고
      // 연결은 작은 쪽으로 연결
      if (sizes[px] < sizes[py]) {
        sizes[py] += sizes[px];
        links[px] = links[py];
      } else {
        sizes[px] += sizes[py];
        links[py] = links[px];
      }
    }
  };

  // 각 이름의 고유 번호
  let idx = 1;
  inputs.forEach(([x, y]) => {
    if (network[x] === undefined) {
      network[x] = idx;
      idx++;
    }
    if (network[y] === undefined) {
      network[y] = idx;
      idx++;
    }
    union(network[x], network[y]);
    const px = find(network[x]);
    const py = find(network[y]);
    answer.push(Math.max(sizes[px], sizes[py]));
  });
  return answer;
};

const preSolution = (rawInputs) => {
  const answer = [];
  const n = Number(rawInputs[0]);
  let m = Number(rawInputs[1]);
  let s = 2;
  while (s < rawInputs.length) {
    answer.push(solution(rawInputs.slice(s, s + m), m).join('\n'));
    s = s + m + 1;
    m = rawInputs[s - 1];
  }

  return answer.join('\n');
};

console.log(preSolution(rawInputs));

module.exports = { solution };
