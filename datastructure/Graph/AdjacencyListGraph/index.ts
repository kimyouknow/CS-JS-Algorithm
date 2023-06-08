export default class AdjacencyListGraph {
  protected nodes: Map<string, Array<string>>;
  constructor() {
    this.nodes = new Map();
  }
  showNode() {
    return this.nodes;
  }
  display() {
    this.nodes.forEach((value, key) => {
      console.log('key :>> ', key, '|| value:>>', value.join(' '));
    });
    return this;
  }
  addVertex(vertex: string) {
    if (!this.nodes.has(vertex)) {
      this.nodes.set(vertex, []);
    }

    return this;
  }
  addEdge(vertex1: string, vertex2: string) {
    if (!this.nodes.has(vertex1)) {
      this.addVertex(vertex1);
    }

    if (!this.nodes.has(vertex2)) {
      this.addVertex(vertex2);
    }

    this.nodes.get(vertex1)?.push(vertex2);
    this.nodes.get(vertex2)?.push(vertex1);

    return this;
  }
  removeEdge(vertex1: string, vertex2: string) {
    const filter = (vertex: string) => vertex !== vertex2;

    const newVertex1 = this.nodes.get(vertex1)?.filter(filter) || [];
    const newVertex2 = this.nodes.get(vertex2)?.filter(filter) || [];
    this.nodes.set(vertex1, newVertex1);
    this.nodes.set(vertex2, newVertex2);

    return this;
  }
  removeVertex(vertex: string) {
    const hasVertex = () =>
      this.nodes.has(vertex) && this.nodes.get(vertex)?.length;

    while (hasVertex()) {
      const foundVertex = this.nodes.get(vertex)?.pop();
      if (foundVertex) {
        this.removeEdge(vertex, foundVertex);
      }
    }

    this.nodes.delete(vertex);

    return this;
  }
}
