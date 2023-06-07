import AdjacencyMatrixGraph from './index';

const len = 5;

describe('AdjacencyMatrixGraph', () => {
  describe('create Graph instance', () => {
    const graph = new AdjacencyMatrixGraph();
    graph.create(len);
    it('graph가 Graph 클래스의 인스턴스가 맞습니까?', () => {
      expect(graph).toBeInstanceOf(AdjacencyMatrixGraph);
    });
    it('길이가 n인 graph를 생성하면 이차원배열의 모든 배열의 길이가 n인가요?', () => {
      expect(graph.nodes.length).toBe(len);
      graph.nodes.map((node) => expect(node.length).toBe(len));
    });
    it('size(포인터)가 가리키는 값이 0인가요? ', () => {
      expect(graph.size).toBe(0);
    });
  });

  describe('addVertex', () => {
    let graph: AdjacencyMatrixGraph;
    const vertex1Value = '찌미';
    const vertex2Value = '띵동';
    let prevGraphSize: number;
    beforeEach(() => {
      graph = new AdjacencyMatrixGraph();
      graph.create(len);
      prevGraphSize = graph.size;
      graph.addVertex(vertex1Value);
    });
    it('addVertex 이후에 graph.size가 1 증가했는가?', () => {
      expect(graph.size).toBe(prevGraphSize + 1);
    });
    it('해당 vertex에 넣은 값이 올바르게 저장되었는가?', () => {
      expect(graph.vertexMap[0]).toBe(vertex1Value);
    });
    it('이미 존재하는 vertex는 추가히지 않기', () => {
      graph.addVertex(vertex1Value);
      const nullableVertexMap = graph.vertexMap.filter((e) => e);
      expect([...new Set([...nullableVertexMap])].length).toBe(1);
    });
    it('연속으로 2개 넣기', () => {
      graph.addVertex(vertex2Value);
      expect(graph.size).toBe(prevGraphSize + 2);
      expect(graph.vertexMap[1]).toBe(vertex2Value);
    });
    it('graph의 size를 초과해서 넣으면 추가 안되게 하기', () => {
      const lastVertex = '초과';
      for (let i = 1; i < len; i++) {
        graph.addVertex(`${vertex1Value} ${i}`);
      }
      graph.addVertex(lastVertex);
      expect(graph.size).toBe(len);
      expect(graph.vertexMap[len - 1]).toBe(`${vertex1Value} 4`);
    });
  });

  describe('addEdge', () => {
    let graph: AdjacencyMatrixGraph;
    const vertex1Value = '찌미';
    const vertex2Value = '띵동';
    const vertex3Value = '누리';
    const nullValue = 'empty';
    beforeEach(() => {
      graph = new AdjacencyMatrixGraph();
      graph.create(len);
      graph.addVertex(vertex1Value);
      graph.addVertex(vertex2Value);
      graph.addVertex(vertex3Value);
      graph.addEdge(vertex1Value, vertex2Value);
    });
    it('인자로 넘겨준 정점이 그래프에 없으면 실행하지 않습니다.', () => {
      const vertex3Idx = graph.findVertexIdx(vertex3Value);
      graph.nodes.forEach((node) => expect(node[vertex3Idx]).toBe(0));
      graph.nodes[vertex3Idx].forEach((node) => expect(node).toBe(0));
    });
    it('연결된 정점은 1로 표시합니다.', () => {
      const vertex1Idx = graph.findVertexIdx(vertex1Value);
      const vertex2Idx = graph.findVertexIdx(vertex2Value);
      expect(graph.nodes[vertex1Idx][vertex2Idx]).toBe(1);
      expect(graph.nodes[vertex2Idx][vertex1Idx]).toBe(1);
    });
  });

  describe('removeVertex', () => {
    let graph: AdjacencyMatrixGraph;
    const vertex1Value = '찌미';
    const vertex2Value = '띵동';
    const vertex3Value = '누리';
    const nullValue = 'empty';
    let originVertex1Idx: number;
    let prevGraphSize: number;
    beforeEach(() => {
      graph = new AdjacencyMatrixGraph();
      graph.create(len);
      graph.addVertex(vertex1Value);
      graph.addVertex(vertex2Value);
      graph.addVertex(vertex3Value);
      originVertex1Idx = graph.findVertexIdx(vertex1Value);
      prevGraphSize = graph.size;
      graph.addEdge(vertex1Value, vertex2Value);
      graph.addEdge(vertex1Value, vertex3Value);
      graph.removeVertex(vertex1Value);
    });
    it('입력한 vertex가 없으면 제거하지 않는다.', () => {
      prevGraphSize = graph.size;
      graph.removeVertex(nullValue);
      expect(prevGraphSize).toBe(graph.size);
    });
    it('size가 0 이면 실행하지 않는다.', () => {
      const graph = new AdjacencyMatrixGraph();
      graph.create(0);
      const prevGraph = graph;
      graph.removeVertex(vertex1Value);
      expect(prevGraph.nodes).toMatchObject(graph.nodes);
    });
    it('입력한 vertex를 vertextMap에서 제거', () => {
      const vertex1Idx = graph.findVertexIdx(vertex1Value);
      expect(vertex1Idx).toBe(-1);
      expect(graph.vertexMap[originVertex1Idx]).toBeNull();
    });
    it('입력한 vertex와 연결된 edge를 모두 제거', () => {
      graph.nodes.forEach((node) => expect(node[originVertex1Idx]).toBe(0));
      graph.nodes[originVertex1Idx].forEach((node) => expect(node).toBe(0));
    });
    it('vertex를 제거 한 후 size가 줄었는지 체크', () => {
      expect(graph.size).toBe(prevGraphSize - 1);
    });
  });

  describe('addEdge', () => {
    let graph: AdjacencyMatrixGraph;
    let prevGraphNodes: Array<Array<number>>;
    const vertex1Value = '찌미';
    const vertex2Value = '띵동';
    const vertex3Value = '누리';
    beforeEach(() => {
      graph = new AdjacencyMatrixGraph();
      graph.create(len);
      graph.addVertex(vertex1Value);
      graph.addVertex(vertex2Value);
      graph.addEdge(vertex1Value, vertex2Value);
      prevGraphNodes = [...graph.nodes];
    });
    it('인자로 넘겨준 정점이 그래프에 없으면 실행하지 않습니다.', () => {
      const vertex3Idx = graph.findVertexIdx(vertex3Value);
      expect(vertex3Idx).toBe(-1);
      expect(prevGraphNodes).toEqual(graph.nodes);
    });
    it('연결된 정점은 1로 표시합니다.', () => {
      const vertex1Idx = graph.findVertexIdx(vertex1Value);
      const vertex2Idx = graph.findVertexIdx(vertex2Value);
      expect(graph.nodes[vertex1Idx][vertex2Idx]).toBe(1);
      expect(graph.nodes[vertex2Idx][vertex1Idx]).toBe(1);
    });
  });

  describe('removeEdge', () => {
    let graph: AdjacencyMatrixGraph;
    let prevGraphNodes: Array<Array<number>>;
    let prevGraphSize: number;
    const vertex1Value = '찌미';
    const vertex2Value = '띵동';
    const vertex3Value = '누리';
    const nullValue = 'empty';
    beforeEach(() => {
      graph = new AdjacencyMatrixGraph();
      graph.create(len);
      graph.addVertex(vertex1Value);
      graph.addVertex(vertex2Value);
      graph.addVertex(vertex3Value);
      prevGraphNodes = [...graph.nodes];
      prevGraphSize = graph.size;
      graph.addEdge(vertex1Value, vertex2Value);
      graph.addEdge(vertex1Value, vertex3Value);
      graph.removeEdge(vertex1Value, vertex2Value);
    });
    it('인자로 넘겨준 정점이 그래프에 없으면 실행하지 않습니다.', () => {
      const nullIdx = graph.findVertexIdx(nullValue);
      expect(nullIdx).toBe(-1);
      expect(prevGraphNodes).toEqual(graph.nodes);
    });
    it('연결을 해제한 정점은 0으로 표시합니다.', () => {
      const vertex1Idx = graph.findVertexIdx(vertex1Value);
      const vertex2Idx = graph.findVertexIdx(vertex2Value);
      expect(graph.nodes[vertex1Idx][vertex2Idx]).toBe(0);
      expect(graph.nodes[vertex2Idx][vertex1Idx]).toBe(0);
    });
    it('Edge를 제거해도 그래프의 크기는 변하지 않습니다.', () => {
      expect(prevGraphSize).toBe(graph.size);
    });
  });
});
