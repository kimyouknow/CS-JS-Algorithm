import { PriorityQueue } from '@datastructure/PriorityQueue';

const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../Dijkstra/input.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e: string) => e.split(' ').map((v) => +v));

// 입력 예시
// a -> b
// 5 6
// 1
// 5 1 1
// 1 2 2
// 1 3 3
// 2 3 4
// 2 4 5
// 3 4 6

const solution = (rawInputs: number[][]) => {
  const [[v, e], [start], ...arr] = rawInputs;
  // v: 정점의 개수
  // e: 간선의 개수
  // k: 시작 정점
  const graph: number[][][] = Array.from({ length: v + 1 }, () => []);
  const dist = Array.from({ length: v + 1 }, () => Number.MAX_SAFE_INTEGER);

  arr.forEach(([u, v, w]) => graph[u].push([v, w]));

  // [cost, start] = cost기준으로 정렬
  const pq = new PriorityQueue((a: number[], b: number[]) => a[0] < b[0]);

  pq.insert([0, start]);
  dist[start] = 0;
  while (!pq.isEmpty) {
    const current = pq.poll();
    if (!current) break;
    const [acc, end] = current;

    for (const [next, weight] of graph[end]) {
      const total = weight + acc;

      if (total < dist[next]) {
        dist[next] = total;
        pq.insert([total, next]);
      }
    }
  }
  return dist
    .slice(1, v + 1)
    .map((v) => (v === Number.MAX_SAFE_INTEGER ? 'INF' : v))
    .join('\n');
};

console.log(solution(rawInputs));
