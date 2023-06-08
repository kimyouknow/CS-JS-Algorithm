const path = require('path');
const fs = require('fs');

const rawInputs = fs
  //	.readFileSync('/dev/stdin')
  .readFileSync(path.resolve(__dirname, '../11279-s2/1.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

class Heap {
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
      // 오른쪽 자식이 없으면 왼쪽 자식을 가장 큰 노드로 사용
      if (this.arr[rightChidIdx]) {
        targetIdx = this.compare(this.arr[rightChidIdx], this.arr[leftChildIdx])
          ? rightChidIdx
          : leftChildIdx;
        // targetIdx = this.arr[rightChidIdx] > this.arr[leftChildIdx] ? rightChidIdx : leftChildIdx;
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

class Pq extends Heap {
  constructor(compare) {
    super(compare);
  }
  isEmpty() {
    const length = this.arr.length;
    return length === 0;
  }
  enqueue(value) {
    return this.insert(value);
  }
  dequeue() {
    return this.poll();
  }
}

const solution = (rawInputs) => {
  const [n, ...arr] = rawInputs;
  const pq = new Pq((a, b) => a > b);
  const answer = [];
  arr.map((v) => {
    if (v === 0) {
      let res = pq.dequeue();
      res = res === undefined ? 0 : res;
      answer.push(res);
    } else {
      pq.enqueue(v);
    }
  });
  return answer.join('\n');
};

console.log(solution(rawInputs));

module.exports = { solution };
