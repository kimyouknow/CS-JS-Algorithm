const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../12886-g4/1.txt'))
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

// // 1트
// const solution = (rawInputs) => {
//   const [a, b, c] = rawInputs;
//   let answer = 0;

//   if (a === b && b === c) {
//     answer = 1;
//     return answer;
//   }

//   let big = 0;
//   let small = 0;
//   const queue = [];
//   for (let i = 0; i < 3; i++) {
//     for (let j = i; j < 3; j++) {
//       if (i === j) continue;
//       if (rawInputs[i] > rawInputs[j]) {
//         big = i;
//         small = j;
//       } else if (rawInputs[i] < rawInputs[j]) {
//         big = j;
//         small = i;
//       } else {
//         continue;
//       }
//       const newArr = [...rawInputs];
//       newArr[big] = rawInputs[big] - rawInputs[small];
//       newArr[small] = rawInputs[small] + rawInputs[small];
//       queue.push([small, big, newArr]);
//     }
//   }

//   while (queue.length > 0) {
//     const [x, y, arr] = queue.shift();
//     for (let i = 0; i < 3; i++) {
//       for (let j = i; j < 3; j++) {
//         let big = 0;
//         let small = 0;
//         if (i === j) continue;
//         if (arr[i] > arr[j]) {
//           big = i;
//           small = j;
//         } else if (arr[i] < arr[j]) {
//           big = j;
//           small = i;
//         } else {
//           continue;
//         }
//         if (x !== small && y !== big) {
//           const newArr = [...arr];
//           newArr[big] = arr[big] - arr[small];
//           newArr[small] = arr[small] + arr[small];
//           if (newArr[0] === newArr[1] && newArr[1] === newArr[2]) {
//             answer = 1;
//             return answer;
//           }
//           if (newArr[big] === arr[small] && newArr[small] === arr[big]) {
//             answer = 0;
//             return answer;
//           }
//           queue.push([small, big, newArr]);
//         }
//       }
//     }
//   }

//   return answer;
// };

// 2트 시간초과
const solution = (rawInputs) => {
  const [a, b, c] = rawInputs;
  const sum = a + b + c;
  if (sum % 3 !== 0) return 0;
  if (a === b && b === c) return 1;

  const visited = Array.from({ length: 1501 }, () => Array(1501).fill(false));

  const queue = [];
  queue.push([a, b]);
  visited[a][b] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const z = sum - x - y;
    if (x === y && y === z) break;
    const arr = [x, y, z];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === j) continue;
        if (arr[i] < arr[j]) {
          const num1 = arr[i] + arr[i];
          const num2 = arr[j] - arr[i];
          if (visited[num1][num2]) continue;
          visited[num1][num2] = true;
          queue.push([num1, num2]);
        }
      }
    }
  }

  return visited[sum / 3][sum / 3] ? 1 : 0;
};

// // 3트 최대값 최솟값만 넣기
// const solution = (rawInputs) => {
//   const [a, b, c] = rawInputs;
//   const sum = a + b + c;
//   if (sum % 3 !== 0) return 0;
//   if (a === b && b === c) return 1;

//   const visited = Array.from({ length: 1501 }, () => Array(1501).fill(false));

//   const queue = [];
//   queue.push([a, b]);
//   visited[a][b] = true;
//   while (queue.length > 0) {
//     const [x, y] = queue.shift();
//     const z = sum - x - y;
//     if (x === y && y === z) break;
//     const arr1 = [x, x, y];
//     const arr2 = [y, z, z];
//     for (let i = 0; i < 3; i++) {
//       let nx = arr1[i];
//       let ny = arr2[i];
//       if (nx < ny) {
//         ny -= nx;
//         nx += nx;
//       } else if (nx > ny) {
//         nx -= ny;
//         ny += ny;
//       } else {
//         continue;
//       }
//       let nz = sum - nx - ny;
//       const min = Math.min(nx, ny, nz);
//       const max = Math.max(nx, ny, nz);
//       if (visited[min][max]) continue;
//       visited[min][max] = true;
//       queue.push([min, max]);
//     }
//   }

//   return visited[sum / 3][sum / 3] ? 1 : 0;
// };

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushNode(item) {
    const newNode = new Node(item);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length += 1;
  }

  shiftNode() {
    const shiftItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return shiftItem;
  }

  getSize() {
    return this.length;
  }
}

// // 4트 큐 구현
// const solution = (rawInputs) => {
//   const [a, b, c] = rawInputs;
//   const sum = a + b + c;
//   if (sum % 3 !== 0) return 0;
//   if (a === b && b === c) return 1;

//   const visited = Array.from({ length: 1501 }, () => Array(1501).fill(false));

//   const queue = new Queue();
//   queue.pushNode([a, b]);
//   visited[a][b] = true;

//   while (queue.length > 0) {
//     const [x, y] = queue.shiftNode().item;
//     const z = sum - x - y;
//     if (x === y && y === z) break;
//     const arr = [x, y, z];
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (i === j) continue;
//         if (arr[i] < arr[j]) {
//           const num1 = arr[i] + arr[i];
//           const num2 = arr[j] - arr[i];
//           if (visited[num1][num2]) continue;
//           visited[num1][num2] = true;
//           queue.pushNode([num1, num2]);
//         }
//       }
//     }
//   }

//   return visited[sum / 3][sum / 3] ? 1 : 0;
// };

console.log(solution(rawInputs));

module.exports = { solution };
