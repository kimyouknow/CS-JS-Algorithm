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

![예시](../%EC%98%88%EC%A0%9C.png)

### 입력

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

## 인접리스트 그래프 DFS 탐색

### 스택으로 구현한 인접리스트 그래프 DFS

```ts
dfs(vertex: string) {
  this.resetVisted();
  if (!this.nodes.has(vertex)) {
    console.log('입력한 정점이 없습니다.');
    return this;
  }
  const result = [];
  const stack = [];
  stack.push(vertex);
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;
    if (this.vistedVertex[current]) continue;
    this.vistedVertex[current] = true;
    result.push(current);
    this.nodes.get(current)?.forEach((linkedVertex) => {
      if (!this.vistedVertex[linkedVertex]) {
        stack.push(linkedVertex);
      }
    });
  }
  console.log('dfs with stack :>> ', result.join(' '));
  return this;
}
// dfs with stack :>>  A C E H G D F B
```

### 재귀로 구현한 인접리스트 그래프 DFS

```ts
dfsRecur(vertex: string) {
  this.resetVisted();
  const result: Array<string> = [];

  const recur = (targetVertex: string) => {
    this.vistedVertex[targetVertex] = true;
    result.push(targetVertex);
    this.nodes.get(targetVertex)?.forEach((linkedVertex) => {
      if (!this.vistedVertex[linkedVertex]) {
        recur(linkedVertex);
      }
    });
  };
  recur(vertex);
  console.log('dfs with recursive :>> ', result.join(' '));
  return this;
}

// dfs with recursive :>>  A B D C E G H F
```

## 인접리스트 그래프 BFS

```ts
bfs(vertex: string) {
  this.resetVisted();
  const result = [];
  const queue: Array<string> = [];
  queue.push(vertex);
  this.vistedVertex[vertex] = true;
  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;
    result.push(current);
    this.nodes.get(current)?.forEach((linkedVertex) => {
      if (!this.vistedVertex[linkedVertex]) {
        this.vistedVertex[linkedVertex] = true;
        queue.push(linkedVertex);
      }
    });
  }
  console.log('bfs :>> ', result.join(' '));
  return this;
}
// bfs :>>  A B C D E F G H
```
