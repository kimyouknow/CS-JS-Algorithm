export class INode<T> {
  value: T;
  left: INode<T> | null;
  right: INode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree<T> {
  private root: INode<T> | null;

  constructor() {
    this.root = null;
  }
  getRoot() {
    return this.root;
  }
  isRootNull() {
    return this.root === null;
  }
  insert(value: T) {
    const newNode = new INode(value);
    if (this.isRootNull()) {
      this.root = newNode;
      return this;
    }
    return this.insertIntoCurretNode(newNode);
  }
  private insertIntoCurretNode(newNode: INode<T>) {
    const recurInsert = (currentNode: INode<T>) => {
      if (currentNode.value > newNode.value) {
        if (currentNode.left === null) currentNode.left = newNode;
        else recurInsert(currentNode.left);
      } else if (currentNode.value < newNode.value) {
        if (currentNode.right === null) currentNode.right = newNode;
        else recurInsert(currentNode.right);
      }
    };
    recurInsert(this.root!);
    return this;
  }
  contain(value: T) {
    if (this.isRootNull()) return false;
    const recurContain = (currentNode: INode<T> | null): boolean => {
      if (currentNode === null) return false;
      if (currentNode.value > value) return recurContain(currentNode.left);
      else if (currentNode.value < value) return recurContain(currentNode.right);
      else return true; // currentNode.value === value
    };
    return recurContain(this.root);
  }
  find(value: T) {
    if (this.isRootNull()) return null;
    const recurFind = (currentNode: INode<T> | null): INode<T> | null => {
      if (currentNode === null) return null;
      if (currentNode.value > value) return recurFind(currentNode.left);
      else if (currentNode.value < value) return recurFind(currentNode.right);
      else return currentNode; // currentNode.value === value
    };
    return recurFind(this.root);
  }
  findMin() {
    if (this.isRootNull()) return null;
    return this.findMinFromCurrent(this.root!.value);
  }
  findMinFromCurrent(value: T): INode<T> | null {
    const starter = this.find(value);
    if (starter === null) return null;
    const recurFindMinFromCurrent = (currentNode: INode<T>): INode<T> => {
      if (currentNode.left === null) return currentNode;
      return recurFindMinFromCurrent(currentNode.left);
    };
    return recurFindMinFromCurrent(starter);
  }
  findMax() {
    if (this.isRootNull()) return null;
    return this.findMaxFromCurrent(this.root!.value);
  }
  findMaxFromCurrent(value: T): INode<T> | null {
    const starter = this.find(value);
    if (starter === null) return null;
    const recurFindMaxFromCurrent = (currentNode: INode<T>): INode<T> => {
      if (currentNode.right === null) return currentNode;
      return recurFindMaxFromCurrent(currentNode.right);
    };
    return recurFindMaxFromCurrent(starter);
  }
  findParent(value: T) {
    if (this.isRootNull()) return null;
    const recurFindParent = (currentNode: INode<T> | null): INode<T> | null => {
      if (currentNode === null) return null;
      if (currentNode.value > value) {
        if (currentNode.left === null || currentNode.left.value !== value)
          return recurFindParent(currentNode.left);
        else return currentNode; // currentNode.left.value === value
      } else if (currentNode.value < value) {
        if (currentNode.right === null || currentNode.right.value !== value)
          return recurFindParent(currentNode.right);
        else return currentNode; // currentNode.right.value === value
      }
      // curretNode.value === value
      return null;
    };
    return recurFindParent(this.root);
  }
  delete(value: T) {
    if (this.isRootNull()) return this;

    if (this.root!.value === value) {
      this.root = null;
      return this;
    }

    const parent = this.findParent(value);
    if (parent === null) return this;

    let target = this.find(value);
    if (target === null) return this;
    // 자식이 없는 노드를 지울 때 → 그냥 지워도 구조를 유지
    if (target!.left === null && target!.right === null) {
      target = null;
    } else if (target!.left === null) {
      //자식이 1개인 노드를 지울 때 → 자식노드의 위치를 지우는 노드위치로 이동해도 구조 유지
      target = target.right;
    } else if (target!.right === null) {
      //자식이 1개인 노드를 지울 때 → 자식노드의 위치를 지우는 노드위치로 이동해도 구조 유지
      target = target.left;
    } else {
      // 자식이 2개인 노드를 지울 때 지우고 싶은 노드보다 큰 노드 중 가장 작은 값으로 대체
      const newTarget = this.findMinFromCurrent(target.right!.value);
      this.delete(newTarget!.value);
      target.value = newTarget!.value;
    }
    if (parent.left?.value === value) {
      parent.left = target;
    } else if (parent.right?.value === value) {
      parent.right = target;
    }

    const recurReplace = (currentNode: INode<T> | null): undefined => {
      if (currentNode === null) return;
      if (currentNode.value > parent.value) return recurReplace(currentNode.left);
      else if (currentNode.value < parent.value) return recurReplace(currentNode.right);
      else {
        // currentNode.value === value
        currentNode = parent;
        return;
      }
    };
    recurReplace(this.root);

    return this;
  }
  inOrderTraversal() {
    const answer: T[] = [];
    const recur = (currentNode: INode<T> | null) => {
      if (currentNode === null) return;
      recur(currentNode.left);
      answer.push(currentNode.value);
      recur(currentNode.right);
    };
    recur(this.getRoot());
    return answer;
  }
  preOrderTraversal() {
    const answer: T[] = [];
    const recur = (currentNode: INode<T> | null) => {
      if (currentNode === null) return;
      answer.push(currentNode.value);
      recur(currentNode.left);
      recur(currentNode.right);
    };
    recur(this.getRoot());
    return answer;
  }
  postOrderTraversal() {
    const answer: T[] = [];
    const recur = (currentNode: INode<T> | null) => {
      if (currentNode === null) return;
      recur(currentNode.left);
      recur(currentNode.right);
      answer.push(currentNode.value);
    };
    recur(this.getRoot());
    return answer;
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
const inputValues = [1, 2, 3, 4, 6, 7, 8, 9, 10]; // 5 == root
inputValues.forEach((value) => bst.insert(value));
