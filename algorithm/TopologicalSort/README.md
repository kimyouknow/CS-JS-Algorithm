# 위상정렬이란?

위상 정렬(Topological Sort)은 방향 그래프(DAG: Directed Acyclic Graph)에서 간선으로 주어진 정점 간 선후관계를 위배하지 않도록 나열하는 정렬이다.

- 순서가 정해져 있는 작업을 차례로 수행해야할 때 그 순서를 결정해주는 알고리즘이다.
- `알고리즘 문제에서 원소 간의 선후 관계가 주어지고  순서를 정해야하는 상황에서 사용 가능`

## 예시

대표적인 예시로 대학 과정의 교과이수 제도가 있다. 아래와 같이 3과목이 있다고 가정해보자.

세 과목을 모두 듣기 위해서는 `자료구조 -> 기본 알고리즘 -> 고급 알고리즘 (O)` 순서로 수강해야 한다.

`자료구조 -> 고급 알고리즘 -> 기본 알고리즘 (X)` 순서는 올바른 선수과목 순서에서 벗어난다.

![위상정렬.jpeg](%EC%9C%84%EC%83%81%EC%A0%95%EB%A0%AC.jpeg)

## 특징

- 하나의 그래프에서 여러 가지 위상 정렬 결과가 나올 수 있다.
- 그래프의 흐름은 `조건`으로 해석가능하다.
- 그래프의 순환구조가 있는 경우 위상 정렬을 수행할 수 없다.
- 위상 정렬 알고리즘을 통해 2가지를 판단할 수 있다.
  - 현재 그래프가 위상 정렬이 가능한지
  - 가능하다면 그 결과는 무엇인지

## 기본개념

- **진입차수 (Indegree)** : 특정한 노드로 들어오는 간선의 개수
- **진출차수 (Outdegree)** : 특정한 노드에서 나가는 간선의 개수

위의 예시에서 본다면

- 자료구조: 진입차수 = 0, 진출차수= 2
- 기본 알고리즘: 진입차수 = 1, 진출차수= 1
- 고급 알고리즘: 진입차수 = 2, 진출차수= 0

## 구현

> 1. 진입차수가 0인 정점을 indegree 테이블을 채운다.
> 2. indegree가 0 인 정점들을 모듀 큐에 넣는다.
> 3. 큐에서 원소를 꺼내 연결된 모든 간선을 (명목적으로) 제거한다. (indegree 값을 1 감소)
> 4. 집입차수가 0인 정점을 큐에 넣는다.
> 5. 큐가 빌 때까지, 2 ~ 3 번과정을 반복한다.
> 6. 모든 원소를 방문하기 전에 큐가 빈다면 사이클이 존재한다는 뜻이다.
> 7. 모든 원소를 방문했다면 큐에서 꺼낸 순서가 위상 정렬의 결과다.

### 예시

![위상정렬-ex.jpeg](%EC%9C%84%EC%83%81%EC%A0%95%EB%A0%AC-ex.jpeg)

1번

- 위의 그림과 같은 상황

2번, 3번

- Indegree Table: 0 1 1 1 1 2 1
- Queue: A

A와 연결된 B와 E의 indegree감소

- Indegree Table: 0 0 1 1 0 2 1
- Queue: B E
- Answer: A

B와 연결된 C의 indegree감소

- Indegree Table: 0 0 0 1 0 2 1
- Queue: E C
- Answer: A B

E를 꺼낸 뒤, F의 indegree를 감소하지만 0이 아니기 때문에 넘어가기

- Indegree Table: 0 0 0 1 0 1 1
- Queue: C
- Answer: A B E

C를 꺼낸 뒤 연결된 D의 indegree감소

- Indegree Table: 0 0 0 0 0 1 1
- Queue: D
- Answer: A B E C

D를 꺼낸 뒤 연결된 F의 indegree감소

- Indegree Table: 0 0 0 0 0 0 1
- Queue: F
- Answer: A B E C D

F를 꺼낸 뒤 연결된 E의 indegree감소

- Indegree Table: 0 0 0 0 0 0 0
- Queue: E
- Answer: A B E C D F

E를 꺼낸 뒤 큐가 비었으니까 종료

- Indegree Table: 0 0 0 0 0 0 0
- Queue:
- Answer: A B E C D F E

### 시간복잡도

- **`O(V+E)`**위상 정렬을 수행할 때는 차례대로 모든 노드를 확인하면서 (`O(V)`),
- 해당 노드에서 출발하는 간선을 차례대로 제거(`O(E)`)해야 한다.
- 따라서 노드와 간선을 모두 확인하는 것을 고려하여 `O(V) + O(E) = O(V+E)`의 시간이 소요된다.

### 수도코드

```jsx
// 인접리스트 그래프와 진입차수 테이블 초기화
// 진입차수가 0인 정점 큐에 넣기
// 큐가 비어있지 않으면
// 큐에서 뽑고, 정답에 넣기
// 해당 노드에서 연결된 노드의 진입차수를 명목상 1씩 줄이기
// 줄인 노드의 진입차수가 0이면 해당 노드를 큐에 넣기
```

### 구현 코드

```jsx
const path = require('path');
const fs = require('fs');

const rawInputs = fs
  .readFileSync(path.resolve(__dirname, '../TopologicalSort/input.txt'))
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map((v) => +v));

// 입력 예시
// a -> b
// 1 2
// 1 5
// 2 3
// 3 4
// 4 6
// 5 6
// 6 7

const topologySort = (arr) => {
  const answer = [];
  const queue = []; // TODO: queue구현해서 수정하기
  const n = arr.length;
  const graph = {};
  const indegreeTable = {};

  // 그래프의 인접리스트와 진입차수 테이블 초기화
  arr.forEach(([a, b]) => {
    graph[a] = [];
    graph[b] = [];
    indegreeTable[a] = 0;
    indegreeTable[b] = 0;
  });

  arr.forEach(([a, b]) => {
    graph[a].push(b);
    indegreeTable[b]++;
  });

  // 진입차수가 0인 정점 큐에 넣기
  Object.entries(indegreeTable).forEach(([key, value]) => {
    if (value === 0) queue.push(key);
  });

  while (queue.length > 0) {
    const current = queue.shift();
    answer.push(current);

    // 해당 노드에서 연결된 노드의 진입차수를 명목상 1씩 줄이기
    // 줄인 노드의 진입차수가 0이면 해당 노드를 큐에 넣기
    for (const b of graph[current]) {
      indegreeTable[b]--;
      if (indegreeTable[b] === 0) {
        queue.push(b);
      }
    }
  }

  return answer.join(' ');
};

console.log(topologySort(rawInputs));

module.exports = { topologySort };
```

### 참고자료

[https://blog.encrypted.gg/1020](https://blog.encrypted.gg/1020)

[https://m.blog.naver.com/ndb796/221236874984](https://m.blog.naver.com/ndb796/221236874984)
