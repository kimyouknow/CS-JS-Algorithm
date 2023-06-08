import AdjacencyListGraph from './index';

describe('AdjacencyListGraph', () => {
  describe('create graph instance', () => {
    const graph = new AdjacencyListGraph();
    it('graph가 Graph 클래스의 인스턴스인가요?', () => {
      expect(graph).toBeInstanceOf(AdjacencyListGraph);
    });
    it('graph의 nodes의 타입이 Map인가요?', () => {
      expect(graph.showNode().constructor.name).toBe('Map');
    });
  });

  describe('add vertex', () => {
    let graph: AdjacencyListGraph;
    let spyOnAddVertex: jest.SpyInstance;
    const vertex1 = '찌미';
    beforeEach(() => {
      graph = new AdjacencyListGraph();
      spyOnAddVertex = jest.spyOn(graph, 'addVertex');
      graph.addVertex(vertex1);
    });
    afterEach(() => {
      spyOnAddVertex.mockClear();
    });
    it('addVertex함수가 파라미터 1개와 호출되어야 합니다.', () => {
      expect(spyOnAddVertex).toBeCalledWith(vertex1);
      expect(spyOnAddVertex.mock.calls[0].length).toBe(1);
    });
    it('addVertex함수의 파라미터 타입이 string이어야 합니다.?', () => {
      expect(spyOnAddVertex).toBeCalledWith(vertex1);
      expect(typeof vertex1).toBe('string');
      expect(typeof spyOnAddVertex.mock.calls[0][0]).toBe('string');
    });
    it('추가된 vertex가 nodes의 key로 있어야합니다.?', () => {
      const nodes = graph.showNode();
      expect(nodes.has(vertex1)).toBeTruthy();
    });
  });

  describe('addEdge', () => {
    let graph: AdjacencyListGraph;
    let spyOnAddEdge: jest.SpyInstance;
    let nodes: Map<string, Array<string>>;
    const vertex1 = '찌미';
    const vertex2 = '띵동';
    const vertexNoExist = '누리';
    beforeEach(() => {
      graph = new AdjacencyListGraph();
      spyOnAddEdge = jest.spyOn(graph, 'addEdge');
      graph.addEdge(vertex1, vertex2);
      nodes = graph.showNode();
    });
    afterEach(() => {
      spyOnAddEdge.mockClear();
    });
    it('addVertex함수가 파라미터 2개와 호출되어야 합니다.?', () => {
      expect(spyOnAddEdge).toBeCalledWith(vertex1, vertex2);
      expect(spyOnAddEdge.mock.calls[0].length).toBe(2);
    });
    it('addVertex함수의 파라미터들의 타입이 string이어야 합니다.', () => {
      expect(spyOnAddEdge).toBeCalledWith(vertex1, vertex2);
      expect(typeof vertex1).toBe('string');
      expect(typeof vertex2).toBe('string');
      expect(typeof spyOnAddEdge.mock.calls[0][0]).toBe('string');
      expect(typeof spyOnAddEdge.mock.calls[0][1]).toBe('string');
    });
    it('존재하지 않는 vertex에 대해서 edge를 추가하면 vertex를 만들기', () => {
      graph.addEdge(vertexNoExist, vertex1);
      expect(nodes.has(vertexNoExist)).toBeTruthy();
    });
    it('각 vertex들이 올바르게 연결되었는지 체크', () => {
      const vertex1List = nodes.get(vertex1);
      const vertex2List = nodes.get(vertex2);
      expect(vertex1List?.find((e) => e === vertex2)).toBe(vertex2);
      expect(vertex2List?.find((e) => e === vertex1)).toBe(vertex1);
    });
  });

  describe('removeEdge', () => {
    let graph: AdjacencyListGraph;
    let spyOnRemoveEdge: jest.SpyInstance;
    let nodes: Map<string, Array<string>>;
    const vertex1 = '찌미';
    const vertex2 = '띵동';
    beforeEach(() => {
      graph = new AdjacencyListGraph();
      spyOnRemoveEdge = jest.spyOn(graph, 'removeEdge');
      graph.removeEdge(vertex1, vertex2);
      nodes = graph.showNode();
    });
    afterEach(() => {
      spyOnRemoveEdge.mockClear();
    });
    it('removeEdge함수가 파라미터 2개와 호출되었야 합니다.', () => {
      expect(spyOnRemoveEdge).toBeCalledWith(vertex1, vertex2);
      expect(spyOnRemoveEdge.mock.calls[0].length).toBe(2);
    });
    it('removeEdge함수의 파라미터들의 타입이 string이어야 합니다', () => {
      expect(spyOnRemoveEdge).toBeCalledWith(vertex1, vertex2);
      expect(typeof vertex1).toBe('string');
      expect(typeof vertex2).toBe('string');
      expect(typeof spyOnRemoveEdge.mock.calls[0][0]).toBe('string');
      expect(typeof spyOnRemoveEdge.mock.calls[0][1]).toBe('string');
    });
    it('각 vertex에 연결된 vertex가 없어야 된다', () => {
      const vertex1List = nodes.get(vertex1);
      const vertex2List = nodes.get(vertex2);
      expect(vertex1List?.find((e) => e === vertex2)).toBeUndefined();
      expect(vertex2List?.find((e) => e === vertex1)).toBeUndefined();
    });
  });

  describe('remove vertex', () => {
    let graph: AdjacencyListGraph;
    let spyOnRemoveVertex: jest.SpyInstance;
    let nodes: Map<string, Array<string>>;
    const vertex1 = '찌미';
    beforeEach(() => {
      graph = new AdjacencyListGraph();
      spyOnRemoveVertex = jest.spyOn(graph, 'removeVertex');
      nodes = graph.showNode();
      graph.removeVertex(vertex1);
    });
    afterEach(() => {
      spyOnRemoveVertex.mockClear();
    });
    it('addVertex함수가 파라미터 1개와 호출되어야 합니다.', () => {
      expect(spyOnRemoveVertex).toBeCalledWith(vertex1);
      expect(spyOnRemoveVertex.mock.calls[0].length).toBe(1);
    });
    it('addVertex함수의 파라미터 타입이 string이어야 합니다.', () => {
      expect(spyOnRemoveVertex).toBeCalledWith(vertex1);
      expect(typeof vertex1).toBe('string');
      expect(typeof spyOnRemoveVertex.mock.calls[0][0]).toBe('string');
    });
    it('지우고자하는 vertex가 nodes의 key로 없어야 합니다.', () => {
      const nodes = graph.showNode();
      expect(nodes.has(vertex1)).toBeFalsy();
    });
    it('지우고자하는 vertex와 연결된 모든 vertex에서 해당 vertex를 지워야 합니다.', () => {
      expect(nodes.get(vertex1)).toBeUndefined();
      nodes.forEach((node) => {
        expect(node?.find((e) => e === vertex1)).toBeUndefined();
      });
    });
  });
});
