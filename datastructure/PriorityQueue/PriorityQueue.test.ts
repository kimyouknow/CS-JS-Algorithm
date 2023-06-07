import { PriorityQueue } from '@datastructure/PriorityQueue';

describe('Priority Queue ADT test', () => {
  let pq: PriorityQueue<number>;
  let mockArr: number[];
  beforeEach(() => {
    pq = new PriorityQueue((a, b) => a > b); // max
    mockArr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
  });
  it('Result of dequeue should be ascending order', () => {
    mockArr.forEach((v) => pq.enqueue(v));
    const pqRes = mockArr.map((v) => pq.dequeue());
    const ascMockArr = mockArr.sort((a, b) => b - a);
    expect(pqRes).toStrictEqual(ascMockArr);
  });
});
