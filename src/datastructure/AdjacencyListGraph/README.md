# 연결리스트로 그래프 구현

## 연결리스트로 구현한 그래프

각 정점이 어떤 정점과 인접하지 리스트의 형태로 표현한 것이다. 각 정점마다 하나의 리스트를 가지고 있다. 각 리스트는 자신과 인접한 다른 정점을 담고 있다.

노드들의 관계를 연결리스트로 표현하는 방법

## 연결리스트 ADT

객체: 정점의 집합과 간선의 집합

필드

- nodes: javascript map 자료구조를 활용한 연결리스트

메서드

- display(): 콘솔창에 그래프 출력
- addVertex(vertext): 그래프에 정점 v삽입
- addEdge(vertext1, vertext2): 그래프에서 vertext1과 vertext2 연결
- removeVertext(vertext): 그래프에서 vertext을 삭제
- removeEdge(vertext1, vertext2): 그래프에서 vertext1과 vertext2를 연결하는 간선 삭제
- show(): 그래프 정보 출력

## 예시

입력

```js
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

결과

```js
graph.display()
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
