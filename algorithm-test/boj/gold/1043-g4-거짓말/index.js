const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1043-g4-거짓말/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

// //1트 타겟요소마다 필터링하기 ✅
// const solution = (rawInputs) => {
//   const [[n, m], [targets, ...targetIds], ...parties] = rawInputs;
//   let answer = [];
//   const targetArr = Array.from({ length: 51 }, () => false);
//   targetIds.forEach((id) => (targetArr[id] = true));

//   parties.forEach(([people, ...peopleIds]) => answer.push(peopleIds));

//   const filtering = (arr) =>
//     arr.reduce((acc, peopleIds) => {
//       let flag = true;
//       for (const peopleId of peopleIds) {
//         if (targetArr[peopleId]) {
//           peopleIds.forEach((id) => (targetArr[id] = true));
//           flag = false;
//           break;
//         }
//       }
//       flag && acc.push(peopleIds);
//       return acc;
//     }, []);

//   while (true) {
//     const res = filtering(answer);
//     if (answer.length === res.length) break;
//     answer = res;
//   }

//   return answer.length;
// };

// Union Find ✅
const solution = (rawInputs) => {
  const [[n, m], [targets, ...targetIds], ...parties] = rawInputs;
  let answer = 0;
  const arr = Array.from({ length: n + 1 }, (_, i) => i);

  const getParent = (arr, x) => {
    if (arr[x] === x) return x;
    else return getParent(arr, arr[x]);
  };

  const union = (arr, x, y) => {
    const px = getParent(arr, x);
    const py = getParent(arr, y);
    if (px < py) {
      arr[py] = px;
    } else {
      arr[px] = py;
    }
  };

  const isSameParent = (arr, x, y) => {
    const px = getParent(arr, x);
    const py = getParent(arr, y);
    if (px == py) return true;
    else return false;
  };

  parties.forEach(([people, ...peopleIds]) => {
    for (let i = 0; i < people - 1; i++) {
      union(arr, peopleIds[i], peopleIds[i + 1]);
    }
  });

  parties.forEach(([people, ...peopleIds]) => {
    let flag = false;
    for (let i = 0; i < people; i++) {
      const cur = peopleIds[i];
      for (const target of targetIds) {
        if (isSameParent(arr, target, cur)) {
          flag = true;
          break;
        }
      }
    }
    if (!flag) answer++;
  });

  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
