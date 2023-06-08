# 인접행렬으로 그래프 구현

## 인접행렬이란?

그래프를 표현하는 방법 중 하나다. 두 정점을 이어주는 간선이 있다면 두 정점은 인접하다라고 한다.

인접 행렬은 서로 다른 정점들이 인접한 상태인지를 이차원 배열(행렬)로 표현한다.

가중치를 표현하기 용이하다. 가중치 그래프라면 0과 1대신 의미 있는 값을 저장한다.

## 인접행렬 ADT

객체: 정점의 집합과 간선의 집합

필드

- nodes: 인접 행렬
- size: 정점의 개수
- VertexMap: 정점의 종류를 입력받은 순서대로 배열에 저장

메서드

- create(): 그래프 생성
- addVertex(vertext): 그래프에 정점 v삽입
- addEdge(vertext1, vertext2): 그래프에서 vertext1과 vertext2 연결
- removeVertext(vertext): 그래프에서 vertext을 삭제
- removeEdge(vertext1, vertext2): 그래프에서 vertext1과 vertext2를 연결하는 간선 삭제
- show(): 그래프 정보 출력

특징

2차원 배열의 가로, 세로가 같아야함.

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
```

## 인접행렬 그래프 DFS 탐색

재귀로 구현한 DFS가 순서에 맞는 것 같은데 스택으로 구현하면 다르게 나온다.

스택으로 구현하면 해당 노드(A)를 방문 후 자식 노드를 넣을 때 자식 노드를 모두 stack에 넣은 뒤 (B,C) stack에서 pop을 하면 마지막에 넣은 노드부터 dfs를 실행하게 된다.

재귀로 구현하면 해당 노드(A)를 방문 후 자식 노드를 넣을 때 자식 노드를 모두 stack에 넣은 뒤 실행하는게 아니라 자식 하나 (B)를 넣고 dfs를 수행하고, dfs 수행 후 나머지 자식(C)를 실행하게 된다.

### 스택으로 구현한 인접행렬 그래프 DFS

```ts
dfs(vertex: string) {
  this.resetVisted();
  const vertexIdx = this.findVertexIdx(vertex);
  if (vertexIdx === -1) {
    console.log('입력한 정점이 없습니다.');
    return this;
  }
  const result = [];
  const stack = [];
  stack.push(vertex);
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) break;
    if (this.vistedVertex[current]) continue;
    this.vistedVertex[current] = true;
    result.push(current);
    const currentIdx = this.findVertexIdx(current);
    this.nodes[currentIdx].forEach((isLinked, idx) => {
      if (this.isVisited(idx) && isLinked !== 0) {
        stack.push(this.vertexMap[idx]);
      }
    });
  }
  console.log('dfs with stack :>> ', result.join(' '));
  return this;
}
// dfs with stack :>>  A C E H G D F B
```

### 재귀로 구현한 인접행렬 그래프 DFS

```ts
dfsRecur(vertex: string) {
  this.resetVisted();
  const result: Array<string> = [];

  const recur = (targetVertex: string) => {
    this.vistedVertex[targetVertex] = true;
    result.push(targetVertex);
    const targetIdx = this.findVertexIdx(targetVertex);
    this.nodes[targetIdx].forEach((isLinked, idx) => {
      if (isLinked !== 0 && this.isVisited(idx)) {
        const next = this.vertexMap[idx];
        if (next) recur(next);
      }
    });
  };
  recur(vertex);
  console.log('dfs with recursive :>> ', result.join(' '));
  return this;
}

// dfs with recursive :>>  A B D C E G H F
```

## 인접행렬 그래프 BFS

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
    const currentIdx = this.findVertexIdx(current);
    this.nodes[currentIdx].forEach((isLinked, idx) => {
      if (this.isVisited(idx) && isLinked !== 0) {
        const next = this.vertexMap[idx];
        if (next) {
          this.vistedVertex[next] = true;
          queue.push(next);
        }
      }
    });
  }
  console.log('bfs :>> ', result.join(' '));
  return this;
}
// bfs :>>  A B C D E F G H
```
