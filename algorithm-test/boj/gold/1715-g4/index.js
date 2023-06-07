const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../1715-g4/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

// // 단순 정렬 메모리 초과
// const solution = (rawInputs) => {
//   const [n, ...arr] = rawInputs;
//   let desc = arr.sort((a, b) => b - a);
//   let answer = 0;
//   if (n === 1) return arr[0];

//   while (desc.length > 1) {
//     const min1 = desc.pop();
//     const min2 = desc.pop();
//     const sum = min1 + min2;
//     answer += sum;
//     desc.push(sum);
//     desc = desc.sort((a, b) => b - a);
//   }
//   return answer;
// };

// 우선순위 큐
class Pq {
  constructor(compare) {
    this.arr = [];
    this.compare = compare;
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }
  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }
  swap(idx1, idx2) {
    const temp = this.arr[idx1];
    this.arr[idx1] = this.arr[idx2];
    this.arr[idx2] = temp;
    return this;
  }
  push(value) {
    this.arr.push(value);
    return this;
  }
  heapifyUp() {
    // 마지막 노드 선택
    let currentIdx = this.arr.length - 1;

    while (currentIdx > 0) {
      const current = this.arr[currentIdx];
      const parent = this.arr[this.getParentIdx(currentIdx)];
      if (!this.compare(current, parent)) break;
      this.swap(currentIdx, this.getParentIdx(currentIdx));
      // 교체 이후 새로운 노드의 부모를 재할당
      currentIdx = this.getParentIdx(currentIdx);
    }
    return this;
  }
  heapifyDown() {
    // 0번 노드 선택
    let currentIdx = 0;
    const lastIdx = this.arr.length;

    // 왼쪽 요소가 있을 때까지 검사
    while (this.getLeftChildIdx(currentIdx) < lastIdx) {
      const leftChildIdx = this.getLeftChildIdx(currentIdx);
      const rightChidIdx = this.getRightChildIdx(currentIdx);
      let targetIdx = leftChildIdx;
      // 오른쪽 자식이 없으면 왼쪽 자식을 타겟 노드로 사용
      if (this.arr[rightChidIdx]) {
        targetIdx = this.compare(this.arr[rightChidIdx], this.arr[leftChildIdx])
          ? rightChidIdx
          : leftChildIdx;
      }
      if (!this.compare(this.arr[targetIdx], this.arr[currentIdx])) break;

      this.swap(targetIdx, currentIdx);
      currentIdx = targetIdx;
    }
    return this;
  }
  insert(value) {
    return this.push(value).heapifyUp();
  }
  poll() {
    // heap이 비어있으면 undefined 반환
    if (this.arr.length === 0) return undefined;
    // heap에 1의 원소만 있으면 해당 원소만 반환
    if (this.arr.length === 1) return this.arr.pop();

    const lastValue = this.arr[this.arr.length - 1];
    const topValue = this.arr[0];
    this.arr.pop();

    // 0번 인덱스를 반환 후, 0번 인덱스에 최대 값 삽입
    // 이후 heapifyDown 실행
    this.arr[0] = lastValue;
    this.heapifyDown();
    return topValue;
  }
}

const solution = (rawInputs) => {
  const [n, ...arr] = rawInputs;
  if (n === 1) return 0;
  const pq = new Pq((a, b) => a < b);
  arr.forEach((v) => pq.insert(v));
  let answer = 0;

  while (pq.arr.length > 1) {
    const min1 = pq.poll();
    const min2 = pq.poll();
    const sum = min1 + min2;
    answer += sum;
    pq.insert(sum);
  }
  return answer;
};

console.log(solution(rawInputs));

module.exports = { solution };
