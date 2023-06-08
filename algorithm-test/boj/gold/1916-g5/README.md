[https://www.acmicpc.net/problem/1916](https://www.acmicpc.net/problem/1916)

# 느낀 점

가중치가 있는 그래프에서의 최소비용을 bfs로 구현하려고 시도해봤다. 대부분의 풀이가 다익스트라를 활용했지만 다익스트라를 학습하기 전 bfs로 구현한 내 풀이가 왜 틀렸는지 이해하는데 오래걸렸다.

최단거리 문제 알고리즘에 대한 흐름을 알아볼 수 있게 되었다.
DFS, BFS와 다익스트라 알고리즘에 대한 여러가지 의문점은 아직 해결되지 않은 상태라 추가적인 공부가 필요하다.

# 문제 읽기

N개의 도시가 있다. 그리고 한 도시에서 출발하여 다른 도시에 도착하는 M개의 버스

A번째 도시에서 B번째 도시까지 가는데 드는 버스 비용을 최소화

A번째 도시에서 B번째 도시까지 가는데 드는 최소비용을 출력하여라.

M+3째 줄에는 우리가 구하고자 하는 구간 출발점의 도시번호와 도착점의 도시번호1916

도시의 개수 : N(1 ≤ N ≤ 1,000) , 도시의 번호는 1부터 N까지이다.

버스의 개수 : M(1 ≤ M ≤ 100,000), 출발도시위치, 도착치의 도시 위치, 버스 비용

0 ≤ 버스 비용 ≤ 100,000

# 1트: 30분 (BFS)

이차원배열 형태로 가중치 인접행렬 그래프 구현

- table[출발][도착] = 가는 비용

같은 크기의 이차원배열 방문여부

queue

while문

[도착, 누적값] = queue.shift()

for문(1≤ i ≤ n)

if(visited[도착][i] || visited[도착][i] === -1) continue;

방문처리 후 큐에 넣기

# 2트: 40m

### 출발 → 도착이 중복될 수도 있음

- 출발 → 도착으로 가는 길이 여러 개일수도 있음
- 배열로 초기화할 때 고려해야함

### 방문처리 문제

큐를 써서 문제가 되는 점은 노드를 뺄 때 그 노드의 지금 알고 있는 거리가 최소인지 아닌지 모르는데도 방문체크를 해서 그 노드에 다시 방문을 하지 않기 때문에 문제가 됨

⇒ 하지만 이 방법으로 하면 시간 초과발생

```jsx
const solution = (rawInputs) => {
  const [[n], [m], ...arr] = rawInputs;
  const [start, end] = arr[m];
  const inputs = arr.slice(0, m);
  let answer = Number.MAX_SAFE_INTEGER;
  const table = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  const visited = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  inputs.forEach(([s, e, v]) => {
    table[s][e] = Math.min(table[s][e], v);
  });

  const queue = [];
  visited[start][0] = true;
  queue.push([start, 0]);

  while (queue.length > 0) {
    const [cEnd, acc] = queue.shift();
    if (cEnd === end) {
      answer = Math.min(acc, answer);
      continue;
    }
    for (let i = 1; i < n + 1; i++) {
      if (cEnd === i || table[cEnd][i] === Number.MAX_SAFE_INTEGER) continue;
      queue.push([i, acc + table[cEnd][i]]);
    }
  }

  return answer;
};
```

# 3트

누적 값으로 생각해서 풀기

현재 경로까지 누적값과 새로 갈 경로의 값의 합이 이미 간 경로보다 작을 때

- 현재 경로까지 누적 값 갱신
- 큐에 넣기

```jsx
const solution = (rawInputs) => {
  const [[n], [m], ...arr] = rawInputs;
  const [start, end] = arr[m];
  const inputs = arr.slice(0, m);
  const table = Array.from({ length: n + 1 }, () => []);
  const dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);

  // start -> end, cost를 넣기, 중복되는 경로가 있으므로 배열로 초기화
  inputs.forEach(([s, e, v]) => {
    table[s].push([e, v]);
  });

  const queue = [];
  dp[start] = 0;
  queue.push([start, 0]);

  while (queue.length > 0) {
    const [cEnd, acc] = queue.shift();
    if (acc > dp[cEnd]) continue;
    for (const [e, cost] of table[cEnd]) {
      // 현재 경로까지 누적값과 새로 갈 경로의 값의 합이 이미 간 경로보다 작을 때만 큐에 넣기
      if (dp[cEnd] + cost < dp[e]) {
        dp[e] = dp[cEnd] + cost;
        queue.push([e, dp[e]]);
      }
    }
  }

  return dp[end];
};
```
