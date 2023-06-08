import AdjacencyListGraph from '@datastructure/Graph/AdjacencyListGraph';
import AdjacencyMatrixGraph from '@datastructure/Graph/AdjacencyMatrixGraph';

export class SearchAdjMatrixGraph extends AdjacencyMatrixGraph {
  private vistedVertex: { [key: string]: boolean };
  constructor() {
    super();
    this.vistedVertex = {};
  }
  resetVisted() {
    let init: { [key: string]: boolean } = {};
    this.vistedVertex = Object.keys(this.vistedVertex).reduce((acc, cur) => {
      acc[cur] = false;
      return acc;
    }, init);
    return this;
  }
  isVisited(targetIdx: number) {
    const targetVertex = this.vertexMap[targetIdx];
    return targetVertex && !this.vistedVertex[targetVertex];
  }
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
}

export class SearchAdjListGraph extends AdjacencyListGraph {
  private vistedVertex: { [key: string]: boolean };
  constructor() {
    super();
    this.vistedVertex = {};
  }
  resetVisted() {
    let init: { [key: string]: boolean } = {};
    this.vistedVertex = Object.keys(this.vistedVertex).reduce((acc, cur) => {
      acc[cur] = false;
      return acc;
    }, init);
    return this;
  }
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
}

// const graph = new AdjacencyMatrixGraph();
// const graph = new SearchAdjMatrixGraph();
// graph.create(8);
// const graph = new AdjacencyListGraph();
const graph = new SearchAdjListGraph();

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
  .addEdge('G', 'H')
  .dfs('A')
  .dfsRecur('A')
  .bfs('A');

graph.display();
