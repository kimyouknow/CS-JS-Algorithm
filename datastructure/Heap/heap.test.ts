import Heap from '@datastructure/Heap';

const minCompare = (a: number, b: number) => a < b;
const maxCompare = (a: number, b: number) => a > b;
const absoluteCompare = (a: number, b: number) =>
  Math.abs(a) === Math.abs(b) ? a < b : Math.abs(a) < Math.abs(b);

describe('Heap datastructure test', () => {
  describe('Initialize Min Heap', () => {
    it('Create Heap instance', () => {
      const minHeap = new Heap(minCompare);
      expect(minHeap).toBeInstanceOf(Heap);
      expect(minHeap.showEntireMinHeap()).toStrictEqual([]);
    });
  });
  describe('Push: push new value to Min Heap', () => {
    let minHeap: Heap<number>;
    let spyOnPush: jest.SpyInstance;
    const mockValue = 4;
    beforeEach(() => {
      minHeap = new Heap(minCompare);
      spyOnPush = jest.spyOn(Object.getPrototypeOf(minHeap), 'push');
      // @ts-expect-error -> for private method test 😅
      minHeap.push(mockValue);
    });
    afterEach(() => {
      spyOnPush.mockClear();
    });
    it('Push method should be in call with 1 param', () => {
      expect(spyOnPush).toBeCalledWith(mockValue);
      expect(spyOnPush.mock.calls[0].length).toBe(1);
    });
    it("Instance arr's last value should be equal with param", () => {
      const minHeapArr = minHeap.showEntireMinHeap();
      expect(minHeapArr[minHeapArr.length - 1]).toBe(mockValue);
    });
  });
  describe('Swap: switch index of node1 and node2', () => {
    let minHeap: Heap<number>;
    let spyOnSwap: jest.SpyInstance;
    const node1 = 3;
    const node2 = 4;
    const node3 = 5;
    const idx1 = 1;
    const idx2 = 2;
    let prevArr: Array<number>;
    let nextArr: Array<number>;
    let prevIndex1: number;
    let prevIndex2: number;
    beforeEach(() => {
      minHeap = new Heap(minCompare);
      spyOnSwap = jest.spyOn(Object.getPrototypeOf(minHeap), 'swap');
      // @ts-expect-error -> for private method test 😅
      minHeap.push(node1).push(node2).push(node3);
      prevArr = minHeap.showEntireMinHeap();
      prevIndex1 = prevArr[1];
      prevIndex2 = prevArr[2];
      // @ts-expect-error -> for private method test 😅
      minHeap.swap(idx1, idx2);
      nextArr = minHeap.showEntireMinHeap();
    });
    afterEach(() => {
      spyOnSwap.mockClear();
    });
    it('Swap method should be call with 2 number param', () => {
      expect(spyOnSwap).toBeCalledWith(idx1, idx2);
      expect(typeof spyOnSwap.mock.calls[0][0]).toBe('number');
      expect(typeof spyOnSwap.mock.calls[0][1]).toBe('number');
    });
    it('The index of the nodes should be changed correctly ', () => {
      const nextIndex1 = nextArr[1];
      const nextIndex2 = nextArr[2];
      expect(prevIndex1).toBe(nextIndex2);
      expect(prevIndex2).toBe(nextIndex1);
    });
    it('The length of Arr should be same after run swap method', () => {
      const nextArr = minHeap.showEntireMinHeap();
      expect(prevArr.length).toBe(nextArr.length);
    });
  });
  describe('HeapifyUp: children nodes should be bigger than parent node', () => {
    let minHeap: Heap<number>;
    let spyOnHeapifyUp: jest.SpyInstance;
    beforeEach(() => {
      minHeap = new Heap(minCompare);
      spyOnHeapifyUp = jest.spyOn(Object.getPrototypeOf(minHeap), 'heapifyUp');
      // @ts-expect-error -> for private method test 😅
      minHeap.push(10).push(20).push(30).push(1);
    });
    afterEach(() => {
      spyOnHeapifyUp.mockClear();
    });
    it('new Node should be located corretly after heapifyUp', () => {
      const prevArr = minHeap.showEntireMinHeap();
      // @ts-expect-error -> for private method test 😅
      minHeap.heapifyUp();
      const nextArr = minHeap.showEntireMinHeap();
      expect(prevArr).not.toStrictEqual(nextArr);
      expect(nextArr[0]).toBe(1);
      expect(nextArr).toStrictEqual([1, 10, 30, 20]);
    });
  });
  describe('Insert new Node into min heap', () => {
    let minHeap: Heap<number>;
    let spyOnInsert: jest.SpyInstance;
    let mockInsertValues = [3, 7, 2, 1, 5, 9, 10];
    beforeEach(() => {
      minHeap = new Heap(minCompare);
      spyOnInsert = jest.spyOn(minHeap, 'insert');
      mockInsertValues.forEach((v) => minHeap.insert(v));
    });
    afterEach(() => {
      spyOnInsert.mockClear();
    });
    it('Insert method should be call with 1 number param', () => {
      expect(spyOnInsert).toBeCalledWith(mockInsertValues[0]);
      expect(typeof spyOnInsert.mock.calls[0][0]).toBe('number');
    });
    it('children node should be located in Min Heap corretctly', () => {
      const resultArr = minHeap.showEntireMinHeap();
      expect(resultArr).toStrictEqual([1, 2, 3, 7, 5, 9, 10]);
    });
  });
  describe('Poll & heapifyDown: extract root node', () => {
    let minHeap: Heap<number>;
    let spyOnHeapifyDown: jest.SpyInstance;
    let spyOnPoll: jest.SpyInstance;
    let mockInsertValues = [3, 7, 2, 1, 5, 9, 10];
    let pollResult: number;
    let prevArr: number[];
    beforeEach(() => {
      minHeap = new Heap(minCompare);
      spyOnHeapifyDown = jest.spyOn(Object.getPrototypeOf(minHeap), 'heapifyDown');
      spyOnPoll = jest.spyOn(minHeap, 'poll');
      mockInsertValues.forEach((v) => minHeap.insert(v));
      prevArr = minHeap.showEntireMinHeap();
      pollResult = minHeap.poll() as number;
    });
    afterEach(() => {
      spyOnHeapifyDown.mockClear();
      spyOnPoll.mockClear();
    });
    it('HeapifyDown should be called with poll', () => {
      expect(spyOnHeapifyDown).toBeCalled();
    });
    it('HeapifyDown should be call with no param ', () => {
      expect(spyOnHeapifyDown.mock.calls[0][0]).toBeUndefined();
    });
    it('Result of poll should be minimun of mockInsertValues', () => {
      const mockMin = Math.min(...mockInsertValues);
      expect(pollResult).toBe(mockMin);
    });
    it('Result of poll should be 0 index of heap', () => {
      const index0 = prevArr[0];
      expect(pollResult).toBe(index0);
    });
    it('After poll, heap size should be reduced by 1', () => {
      const nextArr = minHeap.showEntireMinHeap();
      expect(nextArr.length).toBe(prevArr.length - 1);
    });
    it('After poll, children should be located corretly ', () => {
      const nextArr = minHeap.showEntireMinHeap();
      expect(nextArr).toStrictEqual([2, 5, 3, 7, 10, 9]);
    });
    it('if Heap is empty, poll return undefined', () => {
      const minHeap = new Heap(minCompare);
      const res = minHeap.poll();
      expect(res).toBeUndefined();
    });
  });
  describe('Entire action', () => {
    let minHeap: Heap<number>;
    let maxHeap: Heap<number>;
    let absoulteHeap: Heap<number>;
    let mockArr = [-3, -7, 3, 7, 2, 1, 5, 9, 10, -5];
    beforeEach(() => {
      minHeap = new Heap(minCompare);
      maxHeap = new Heap(maxCompare);
      absoulteHeap = new Heap(absoluteCompare);
    });
    it('Ascending: The result of repeating the poll by the length of the array should be same with ascending order', () => {
      mockArr.forEach((v) => minHeap.insert(v));
      const res = mockArr.map((v) => minHeap.poll());
      const asc = [...mockArr].sort((a, b) => a - b);
      expect(asc).toStrictEqual(res);
    });
    it('Descending: The result of repeating the poll by the length of the array should be same with descending order', () => {
      mockArr.forEach((v) => maxHeap.insert(v));
      const res = mockArr.map((v) => maxHeap.poll());
      const des = [...mockArr].sort((a, b) => b - a);
      expect(des).toStrictEqual(res);
    });
    it('Absolute: The result of repeating the poll by the length of the array should be same with absolute order', () => {
      mockArr.forEach((v) => minHeap.insert(v));
      const res = mockArr.map((v) => minHeap.poll());
      const abs = [...mockArr].sort((a, b) =>
        Math.abs(a) === Math.abs(b) ? Math.abs(a) - Math.abs(b) : a - b
      );
      expect(abs).toStrictEqual(res);
    });
  });
});
