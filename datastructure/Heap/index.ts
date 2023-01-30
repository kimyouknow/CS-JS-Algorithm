export type Compare<T> = (a: T, b: T) => boolean;

export default class Heap<T> {
  private arr: Array<T>;
  private compare;
  constructor(compare: Compare<T>) {
    this.arr = []; // 0번 인덱스는 사용하지 않는다.
    this.compare = compare;
  }
  showEntireMinHeap() {
    return [...this.arr];
  }
  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i: number) {
    return i * 2 + 1;
  }
  getRightChildIndex(i: number) {
    return i * 2 + 2;
  }
  private push(value: T) {
    this.arr.push(value);
    return this;
  }
  private swap(index1: number, index2: number) {
    const temp = this.arr[index1];
    this.arr[index1] = this.arr[index2];
    this.arr[index2] = temp;
    return this;
  }
  /**
   * 마지막에 this.arr에 삽입한 노드가 제자리로 찾아갈 수 있도록 하는 함수
   */
  private heapifyUp() {
    let currentIdx = this.arr.length - 1;

    while (currentIdx > 0) {
      const current = this.arr[currentIdx];
      const parent = this.arr[this.getParentIndex(currentIdx)];
      // 현재 노드의 값과 현재 노드의 부모값을 compare함수에 넣어서 true면 교체
      if (!this.compare(current, parent)) break;
      this.swap(currentIdx, this.getParentIndex(currentIdx));
      // 교체 이후 새로운 노드의 부모를 재할당
      currentIdx = this.getParentIndex(currentIdx);
    }

    return this;
  }
  /**
   * poll이후에 수정된 최상단노드가 올바른 자리로 찾아가게 하는 함수
   */
  private heapifyDown() {
    let currentIdx = 0;
    const count = this.arr.length;

    // 왼쪽 요소가 있을 때까지 검사
    while (this.getLeftChildIndex(currentIdx) < count) {
      const leftChildIdx = this.getLeftChildIndex(currentIdx);
      const rightChildIdx = this.getRightChildIndex(currentIdx);

      let targetIdx = this.getLeftChildIndex(currentIdx);
      // 오른쪽 자식이 없으면 왼쪽 자식을 타겟 노드로 사용
      // 오른쪽 자식이 있으면 왼쪽 자식과 비교해서 타겟 노드 수정
      if (this.arr[rightChildIdx]) {
        targetIdx = this.compare(this.arr[rightChildIdx], this.arr[leftChildIdx])
          ? rightChildIdx
          : leftChildIdx;
      }

      if (!this.compare(this.arr[targetIdx], this.arr[currentIdx])) break;
      this.swap(targetIdx, currentIdx);
      currentIdx = targetIdx;
    }
    return this;
  }
  insert(value: T) {
    return this.push(value).heapifyUp();
  }
  poll() {
    // heap이 비어있으면 undefined 반환
    if (this.arr.length === 0) return undefined;
    // heap에 1의 원소만 있으면 해당 원소만 반환
    if (this.arr.length === 1) return this.arr.pop();

    const maxValue = this.arr[this.arr.length - 1];
    const minValue = this.arr[0];
    this.arr.pop();

    // 0번 인덱스를 반환 후, 0번 인덱스에 최대 값 삽입
    // 이후 heapifyDown 실행
    this.arr[0] = maxValue;
    this.heapifyDown();
    return minValue;
  }
  find() {
    return this.arr[0];
  }
}

const mockArr = [-3, -7, 3, 7, 2, 1, 5, 9, 10, -5];

const minHeap = new Heap((a: number, b: number) => a < b);
mockArr.forEach((v) => minHeap.insert(v));
console.log('heap', minHeap.showEntireMinHeap());
const minRes = mockArr.map((v) => minHeap.poll());
console.log('minRes', minRes);

const maxHeap = new Heap((a: number, b: number) => a > b);
mockArr.forEach((v) => maxHeap.insert(v));
console.log('heap', maxHeap.showEntireMinHeap());
const maxRes = mockArr.map((v) => maxHeap.poll());
console.log('maxRes', maxRes);

const absoluteCompare = (a: number, b: number) =>
  Math.abs(a) === Math.abs(b) ? a < b : Math.abs(a) < Math.abs(b);
const absoluteHeap = new Heap(absoluteCompare);
mockArr.forEach((v) => absoluteHeap.insert(v));
console.log('heap', absoluteHeap.showEntireMinHeap());
const absoluteRes = mockArr.map((v) => absoluteHeap.poll());
console.log('absoluteRes', absoluteRes);
