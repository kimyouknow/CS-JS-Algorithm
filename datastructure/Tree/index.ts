export default class TreeNode<T> {
  private children: TreeNode<T>[] = [];
  private value: T;
  private height: number;
  constructor(value: T, height: number = 0) {
    this.value = value;
    this.height = height;
  }
  private setHeight(height: number) {
    this.height = height;
    return this;
  }
  /**
   * 서브 트리 높이를 재귀적으로 증가시키는 함수
   * @param parentHeight TreeNode의 높이
   * @param elements TreeNode의 children(서브트리)
   * @returns 높이가 1씩 늘어난 자식 elements(서브트리)
   */
  private setChildrenHeight(
    parentHeight: number,
    ...elements: TreeNode<T>[]
  ): TreeNode<T>[] {
    return elements.map((treeNode) => {
      this.setChildrenHeight(parentHeight + 1, ...treeNode.getChildren()); // 재귀로 서브트리의 높이를 모두 1씩 추가
      return treeNode.setHeight(parentHeight + 1);
    });
  }
  private setChildren(elements: TreeNode<T>[]) {
    this.children = elements;
    return this;
  }
  getChildren() {
    return this.children;
  }
  getHeight() {
    return this.height;
  }
  getValue() {
    return this.value;
  }
  /**
   * 값을 받으면 해당 값으로 TreeNode를 생성하기
   * @param values 서브트리의 value가 될 값들
   * @returns this
   */
  addChildren(...values: Array<T>) {
    this.children.push(
      ...values.map((value) => new TreeNode(value, this.height + 1))
    );
    return this;
  }
  /**
   * 서브트리를 TreeNode에 직접 추가하는 함수
   * @param elements TreeNode의 children(서브트리)
   * @returns this
   */
  insertSubTree(...elements: TreeNode<T>[]) {
    this.children.push(...this.setChildrenHeight(this.height, ...elements));
    return this;
  }
  /**
   * DFS로 tree에서 value은 노드 찾기
   * @param value 찾고자하는 node의 value
   * @returns value가 입력한 value인 노드 자체를 반환
   */
  find(value: T) {
    let result = null;
    const recur = (treeNode: TreeNode<T>) => {
      if (treeNode.getValue() === value) {
        result = treeNode;
        return result;
      }
      for (const child of treeNode.getChildren()) {
        recur(child);
      }
    };
    recur(this);
    return result;
  }
  /**
   * 삭제하고자하는 Tree의 부모를 찾고, 해당 부모의 자식요소 중 삭제하고자하는 Tree를 제거
   * @param value 삭제하고자 하는 Tree의 value
   * @returns
   */
  delete(value: T) {
    const recur = (treeNode: TreeNode<T>) => {
      // 찾고자하는 value의 부모요소를 찾아서 실행
      for (const child of treeNode.getChildren()) {
        if (child.getValue() === value) {
          const newChildren = treeNode
            .getChildren()
            .filter((node) => node.value !== value);
          treeNode.setChildren(newChildren);
          break;
        }
        recur(child);
      }
    };
    recur(this);
    return this;
  }
  /**
   * 트리를 BFS로 순회하면서 콘솔에 출력하는 함수
   */
  traverseBFS() {
    const result = [];
    const queue = [];
    const visted = new Map<T, boolean>();
    queue.push({
      value: this.value,
      height: this.height,
      children: this.children,
    });
    visted.set(this.value, true);
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current) continue;
      result.push(`height: ${current.height}, value: ${current.value}`);
      current.children.forEach((childNode) => {
        const { value, height, children } = childNode;
        if (!visted.get(value)) {
          visted.set(value, true);
          queue.push({ value, height, children });
        }
      });
    }
    return result.join('\n');
  }
  /**
   * 트리를 DFS(재귀)로 순회하면서 콘솔에 출력하는 함수
   */
  traverseDFS(result: string[] = []) {
    result.push(`height: ${this.height}, value: ${this.value}`);
    this.children.forEach((childNode) => {
      return childNode.traverseDFS(result);
    });
    return result.join('\n');
  }
}

export const makeExampleTree = () => {
  const tree = new TreeNode('1');
  const second = new TreeNode('2');
  const fourth = new TreeNode('4');
  const fifth = new TreeNode('5');
  const sixth = new TreeNode('6');
  const seventh = new TreeNode('7');
  const eightth = new TreeNode('8');
  second.addChildren('2-1', '2-2', '2-3');
  const third = new TreeNode('3');
  third.addChildren('3-1', '3-2', '3-3');
  tree.insertSubTree(second, fourth);
  fourth.insertSubTree(fifth);
  sixth.insertSubTree(seventh);
  fifth.insertSubTree(sixth, eightth);
  second.insertSubTree(third);
  return tree;
};

const tree = makeExampleTree();
console.log('traverseBFS :>>\n', tree.traverseBFS());
console.log('traverseDFS :>>\n', tree.traverseDFS());
