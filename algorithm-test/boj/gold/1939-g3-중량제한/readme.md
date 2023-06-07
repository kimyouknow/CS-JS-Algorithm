링크: [https://www.acmicpc.net/problem/1939](https://www.acmicpc.net/problem/1939)

[백준] 1939-g3-중량제한 이분탐색, DFS, BFS

# 느낀 점

DFS, BFS 방문처리 관련 학습이 필요해보인다. 기본적인 이해가 부족했다.

# 문제 읽기

N(2 ≤ N ≤ 10,000), M(1 ≤ M ≤ 100,000)

몇 개의 섬 사이에는 다리가 설치되어 있음

중량제한을 초과하는 양의 물품이 다리를 지나게 되면 다리가 무너짐

한 번의 이동에서 옮길 수 있는 뭄풀들의 중량의 최댓값

A, B(1 ≤ A, B ≤ N), C(1 ≤ C ≤ 1,000,000,000)

A섬과 B섬 사이의 중량제한 C

- 두 섬 사이에 여러 개 존재 가능
- 양방향

마지막 줄: 공장이 위치한 섬의 번호

## 1트: 36m, 메모리 초과

공장위치 : x,y

matrix 가중 그래프

- matrix[a][b] = [c] : 서로 같은 두 섬에 여러 개의 다리가 존재 가능,
  - 여러 개가 있다면 가장 큰 값 선택
- DFS, 백트래킹
- c의 최소값으로 갱신하다가 y에 도착하면 해당 c를 출력

x,y를 한 번에 연결하는 경우

- 입력값 중에 x y c가 있는 경우

x,y를 한 번에 연결하지 못하는 경우

## 2트:

재귀를 while문으로 수정하기

문제에서 C의 경우 1,000,000,000 ( = 10억) 이므로 메모리 초과가 뜬 것이다. (메모리 제한 = 128kb)

## 3트: 이진탐색 활용하기 ✅

최소 최대 중량을 설정한 뒤 mid을 중량으로 설정했을 때 통과할 수 있는지 확인

### DFS와 BFS차이

어떤 방법이든 설정할 중량으로 끝까지 도달할 수 있으면 true를 반환하도록하고 아니면 false를 반환하게 했다.

그런데 DFS로 하면 실패하고 BFS로 하면 통과했다.

DFS의 반환 부분이 문제인 것 같은데 정확한 원인을 찾지 못했다.

```tsx
// recursion
const dfs = (cur, w) => {
  if (cur === y) {
    return true;
  }

  for (const [next, value] of matrix[cur]) {
    if (visited[next]) continue;
    if (value < w) continue;
    visited[next] = true;
    if (dfs(next, w)) return true;
  }
  return false;
};

visited = Array.from({ length: n + 1 }, () => false);
const res = dfs(x, mid);
```

```tsx
const bfs = (w) => {
  visited = Array.from({ length: n + 1 }, () => false);
  visited[x] = true;
  const queue = [x];

  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur === y) return true;
    for (const [next, value] of matrix[cur]) {
      if (visited[next]) continue;
      if (value < w) continue;
      visited[next] = true;
      queue.push(next);
    }
  }

  return false;
};

// const res = bfs(mid);
```

### 해결

방문처리 문제 → 추가적인 학습 필요

```tsx
const dfs = (cur, w) => {
  if (visited[cur]) return false;
  visited[cur] = true;
  if (cur === y) {
    return true;
  }

  for (const [next, value] of matrix[cur]) {
    if (value < w) continue;
    if (dfs(next, w)) return true;
  }
  return false;
};
```
