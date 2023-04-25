const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../7662-g4/1.txt'))
  .toString()
  .trim()
  .split('\n');

// 우선순위 큐 2개
// class Pq {
//   constructor(compare = (a, b) => a > b) {
//     this.arr = [];
//     this.compare = compare;
//   }
//   getParentIdx(idx) {
//     return Math.floor((idx - 1) / 2);
//   }
//   getLeftChildIdx(idx) {
//     return idx * 2 + 1;
//   }
//   getRightChildIdx(idx) {
//     return idx * 2 + 2;
//   }
//   swap(idx1, idx2) {
//     const temp = this.arr[idx1];
//     this.arr[idx1] = this.arr[idx2];
//     this.arr[idx2] = temp;
//     return this;
//   }
//   isEmpty() {
//     const length = this.arr.length;
//     return length === 0;
//   }
//   push(value) {
//     this.arr.push(value);
//     return this;
//   }
//   heapifyUp() {
//     // 마지막 노드 선택
//     let currentIdx = this.arr.length - 1;
//     // 현재 노드의 값이 현재 노드의 부모값과 비교해서 부모노드와 현재 노드를 교체
//     while (this.compare(this.arr[currentIdx], this.arr[this.getParentIdx(currentIdx)])) {
//       this.swap(currentIdx, this.getParentIdx(currentIdx));
//       // 교체 이후 새로운 노드의 부모를 재할당
//       currentIdx = this.getParentIdx(currentIdx);
//     }
//     return this;
//   }
//   heapifyDown() {
//     // 0번 노드 선택
//     let currentIdx = 0;
//     const lastIdx = this.arr.length;

//     // 왼쪽 요소가 있을 때까지 검사
//     while (this.getLeftChildIdx(currentIdx) < lastIdx) {
//       const leftChildIdx = this.getLeftChildIdx(currentIdx);
//       const rightChidIdx = this.getRightChildIdx(currentIdx);
//       let targetChildIdx = leftChildIdx;
//       // 오른쪽 자식이 없으면 왼쪽 자식을 사용
//       // 오른쪽 자식이 있다면 왼쪽 자식과 비교
//       if (this.arr[rightChidIdx]) {
//         targetChildIdx = this.compare(this.arr[rightChidIdx], this.arr[leftChildIdx])
//           ? rightChidIdx
//           : leftChildIdx;
//       }
//       if (this.compare(this.arr[targetChildIdx], this.arr[currentIdx])) {
//         this.swap(targetChildIdx, currentIdx);
//         currentIdx = targetChildIdx;
//       } else break;
//     }
//     return this;
//   }
//   insert(value) {
//     return this.push(value).heapifyUp();
//   }
//   poll() {
//     // heap이 비어있으면 undefined 반환
//     if (this.arr.length === 0) return undefined;
//     // heap에 1의 원소만 있으면 해당 원소만 반환
//     if (this.arr.length === 1) return this.arr.pop();

//     const lastValue = this.arr[this.arr.length - 1];
//     const topValue = this.arr[0];
//     this.arr.pop();

//     // 0번 인덱스를 반환 후, 0번 인덱스에 최대 값 삽입
//     // 이후 heapifyDown 실행
//     this.arr[0] = lastValue;
//     this.heapifyDown();
//     return topValue;
//   }
// }

// const solution = (commands) => {
//   const maxPq = new Pq((a, b) => a > b);
//   const minPq = new Pq((a, b) => a < b);
//   const map = {};
//   commands.forEach((command) => {
//     const [order, value] = command.split(' ');
//     const nValue = Number(value);
//     if (order === 'I') {
//       maxPq.insert(nValue);
//       minPq.insert(nValue);
//       map[nValue] = true;
//     }
//     if (order === 'D') {
//       if (nValue === -1) {
//         // 최솟값
//         while (!minPq.isEmpty() && !map[minPq.arr[0]]) {
//           minPq.poll();
//         }
//         if(!minPq.isEmpty()){
//           map[minPq.arr[0]] =
//         }
//       }
//       if (nValue === 1) {
//         // 최댓값
//         while (!maxPq.isEmpty() && !map[maxPq.arr[0]]) {
//           maxPq.poll();
//         }
//       }
//     }
//   });
//   while (!maxPq.isEmpty() && map[maxPq.arr[0]] === 0) {
//     maxPq.poll();
//   }
//   while (!minPq.isEmpty() && map[minPq.arr[0]] === 0) {
//     minPq.poll();
//   }
//   if (minPq.isEmpty() && maxPq.isEmpty()) {
//     return 'EMPTY';
//   }
//   const max = maxPq.arr[0];
//   const min = minPq.arr[0];
//   return `${max} ${min}`;
// };

// 이진탐색트리

const solution = (commands) => {};

const beforeSolution = (rawInputs) => {
  const [t, ...arr] = rawInputs;
  let T = Number(t);
  let inputs = arr;
  let answer = [];
  while (T > 0) {
    const [n, ...commands] = inputs;
    const N = Number(n);
    const res = solution(commands.slice(0, N));
    answer.push(res);
    T--;
    inputs = commands.slice(N);
  }
  return answer.join('\n');
};

console.log(beforeSolution(rawInputs));

module.exports = { solution };
