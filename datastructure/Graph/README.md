# 그래프 자료구조란?

컴퓨터 공학에서 이야기 하는 자료구조의 그래프는 거미줄처럼 여러 개의 점들이 선으로 이어져 있는 복잡한 네트워크 망과 같은 모습을 가지고 있다.

즉, 그래프는 여러 개의 점들이 서로 연결되어 있는 관계를 표현한 자료구조이다.

## 그래프 종류

아래 언급한 것 외에 더 많다.

- 방향 그래프
- 방향이 없는 그래프
- 순환 그래프
- 순환하지 않는 그래프

## 그래프의 구성 요소

- 정점(vertex): 위치라는 개념. (node 라고도 부름)
- 간선(edge): 위치 간의 관계. 즉, 노드를 연결하는 선 (link, branch 라고도 부름)
- 인접 정점(adjacent vertex): 간선에 의 해 직접 연결된 정점
- 정점의 차수(degree): 무방향 그래프에서 하나의 정점에 인접한 정점의 수
- 무방향 그래프에 존재하는 정점의 모든 차수의 합 = 그래프의 간선 수의 2배
- 진입 차수(in-degree): 방향 그래프에서 외부에서 오는 간선의 수 (내차수 라고도 부름)
- 진출 차수(out-degree): 방향 그래픙에서 외부로 향하는 간선의 수 (외차수 라고도 부름)
- 방향 그래프에 있는 정점의 진입 차수 또는 진출 차수의 합 = 방향 그래프의 간선의 수(내차수 + 외차수)
- 경로 길이(path length): 경로를 구성하는 데 사용된 간선의 수
- 단순 경로(simple path): 경로 중에서 반복되는 정점이 없는 경우
- 사이클(cycle): 단순 경로의 시작 정점과 종료 정점이 동일한 경우

## 일상생활에서 자료주고 그래프를 사용하는 예시

포털 사이트의 검색 엔진, sns에서 사람들과의 관계, 네비게이션 등은 그래프를 사용한다. 각각의 서비스들은 추상화해서 보면 수많은 정점을 가지고, 서로 관계가 있는 정점은 간선으로 이어져 있다.

네비게이션을 예로 살펴보자.

정점: 서울, 대전, 부산

간선: 서울 - 대전, 대전 - 부산, 부산 - 서울

## 비가중치 그래프

비가중치 그래프란 추가적인 정보를 파악할 수 없는 그래프를 말한다. 비가중치 그래프는 가중치가 적혀 있지 않다.

위의 예시에서 특정 도시가 이어져 있다는 사실 외에 다른 정보가 없으므로 비가중치 그래프라고 할 수 있다.

## 가중치 그래프

가중치 그래프는 정점 간 연결 유무 외에 더 자세한 정보를 담을 수 있다.

위의 예시에서 도시간 거리 정보를 간선에 남으면 가중치 그래프가 된다.

## 그래프를 표현하는 방법

### Adjacency Matrix (인접행렬)

두 정점을 이어주는 간선이 있다면 두 정점은 인접하다라고 한다.

인접 행렬은 서로 다른 정점들이 인접한 상태인지를 이차원 배열(행렬)로 표현한다.

가중치를 표현하기 용이하다. 가중치 그래프라면 0과 1대신 의미 있는 값을 저장한다.

![인접행렬그래프](./%EC%9D%B8%EC%A0%91%ED%96%89%EB%A0%AC%EA%B7%B8%EB%9E%98%ED%94%84.png)

### Adjacency List (인접리스트)

각 정점이 어떤 정점과 인접하지 리스트의 형태로 표현한 것이다. 각 정점마다 하나의 리스트를 가지고 있다. 각 리스트는 자신과 인접한 다른 정점을 담고 있다.

노드들의 관계를 연결리스트로 표현하는 방법

![인접리스트그래프](./%EC%9D%B8%EC%A0%91%EB%A6%AC%EC%8A%A4%ED%8A%B8%EA%B7%B8%EB%9E%98%ED%94%84.png)

## 그래프 탐색

[BFS vs DFS](https://www.notion.so/BFS-vs-DFS-0f23ad74ff94478ca24dfa16e809f9e7) → 탐색 알고리즘 ADT

![예제](./%EC%98%88%EC%A0%9C.png)

```tsx
graph
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F')
  .addVertex('G')
  .addVertex('H')
  .addEdge('A', 'B')
  .addEdge('A', 'C')
  .addEdge('B', 'D')
  .addEdge('C', 'D')
  .addEdge('C', 'E')
  .addEdge('D', 'F')
  .addEdge('E', 'G')
  .addEdge('E', 'H')
  .addEdge('G', 'H');
```

```ts
// 인접행렬 그래프
  A B C D E F G H
A 0 1 1 0 0 0 0 0
B 1 0 0 1 0 0 0 0
C 1 0 0 1 1 0 0 0
D 0 1 1 0 0 1 0 0
E 0 0 1 0 0 0 1 1
F 0 0 0 1 0 0 0 0
G 0 0 0 0 1 0 0 1
H 0 0 0 0 1 0 1 0

// 인접리스트 그래프
key :>>  A || value:>> B C
key :>>  B || value:>> A D
key :>>  C || value:>> A D E
key :>>  D || value:>> B C F
key :>>  E || value:>> C G H
key :>>  F || value:>> D
key :>>  G || value:>> E H
key :>>  H || value:>> E G
```

## 참고자료

[https://hanamon.kr/자료구조-graph-그래프/](https://hanamon.kr/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-graph-%EA%B7%B8%EB%9E%98%ED%94%84/)

[https://gmlwjd9405.github.io/2018/08/13/data-structure-graph.html](https://gmlwjd9405.github.io/2018/08/13/data-structure-graph.html)

[https://velog.io/@porupit0122/JavaScript-자료구조-3-그래프Graph](https://velog.io/@porupit0122/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-3-%EA%B7%B8%EB%9E%98%ED%94%84Graph)

[https://www.youtube.com/watch?v=4izGhUk2L1s](https://www.youtube.com/watch?v=4izGhUk2L1s)

[https://suyeon96.tistory.com/32](https://suyeon96.tistory.com/32)
