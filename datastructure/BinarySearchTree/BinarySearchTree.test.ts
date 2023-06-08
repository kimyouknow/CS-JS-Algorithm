// import BinarySearchTree, { INode } from '@/datastructure/BinarySearchTree';

import BinarySearchTree, { INode } from 'datastructure/BinarySearchTree';

/**
 * 테스트 코드에서 사용할 이진탐색트리를 중위순외한 결과값을 반환하는 함수
 */
const traversalInorderTest = <T>(bst: BinarySearchTree<T>) => {
  const answer: T[] = [];
  const recur = (currentNode: INode<T> | null) => {
    if (currentNode === null) return;
    recur(currentNode.left);
    answer.push(currentNode.value);
    recur(currentNode.right);
  };
  recur(bst.getRoot());
  return answer;
};

const rootValue = 6;
const mockNumberArr = [rootValue, 4, 2, 7, 1, 10, 8, 0, 9, 3]; // 6 == root
const noExistNumber = 333;
const existNumber = 10;
const valueWithNochildren = 0;
const valueWithOneChild = 7;
const valueWithTwoChildren = 4;

/**
 * bst인스턴스에 임의로 number배열을 삽입
 */
const insertMockNumberToBst = (bst: BinarySearchTree<number>, inputArr: number[]) => {
  inputArr.forEach((number) => bst.insert(number));
  return bst;
};

describe('Binary Search Tree', () => {
  describe('Initialize BST', () => {
    it('Create BST Instance', () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeInstanceOf(BinarySearchTree);
      expect(bst.getRoot()).toBeNull();
    });
  });
  describe('Insert value to the BST', () => {
    let bst: BinarySearchTree<number>;
    let spyOnInsertIntoCurrentNode: jest.SpyInstance;
    let rootValue = 5;
    let smallerThanRoot = 3;
    let biggerThanRoot = 10;
    beforeEach(() => {
      bst = new BinarySearchTree();
      spyOnInsertIntoCurrentNode = jest.spyOn(Object.getPrototypeOf(bst), 'insertIntoCurretNode');
      bst.insert(rootValue);
    });
    afterEach(() => {
      spyOnInsertIntoCurrentNode.mockClear();
    });
    it('If root === null, set new Value to root of BST', () => {
      expect(bst.getRoot()).toStrictEqual(new INode(rootValue));
    });
    it('If root !=== null, call <insertIntoCurretNode> method', () => {
      bst.insert(smallerThanRoot);
      expect(spyOnInsertIntoCurrentNode).toBeCalled();
    });
    it('insertIntoCurretNode: new value small than the root value shoud be located to the left of the root', () => {
      bst.insert(smallerThanRoot);
      const leftNode = bst.getRoot()?.left;
      expect(leftNode).not.toBeNull();
      expect(leftNode?.value).toBe(smallerThanRoot);
    });
    it('insertIntoCurretNode: new value bigger than the root value shoud be located to the right of the root', () => {
      bst.insert(biggerThanRoot);
      const leftNode = bst.getRoot()?.right;
      expect(leftNode).not.toBeNull();
      expect(leftNode?.value).toBe(biggerThanRoot);
    });
    it('insertIntoCurretNode: check all value should be located in BST corretly', () => {
      const inputValues = [...mockNumberArr];
      bst = insertMockNumberToBst(bst, inputValues);
      const answer = traversalInorderTest(bst);
      expect(answer).toStrictEqual(Array.from({ length: 11 }, (v, i) => i));
    });
  });
  describe('Contains and Find target value in BST', () => {
    let bst: BinarySearchTree<number>;
    let spyOnFindMinFromCurrent: jest.SpyInstance;
    let spyOnFindMaxFromCurrent: jest.SpyInstance;
    const inputArr = [...mockNumberArr, 5, 44];
    beforeEach(() => {
      bst = new BinarySearchTree();
      spyOnFindMinFromCurrent = jest.spyOn(Object.getPrototypeOf(bst), 'findMinFromCurrent');
      spyOnFindMaxFromCurrent = jest.spyOn(Object.getPrototypeOf(bst), 'findMaxFromCurrent');
      bst = insertMockNumberToBst(bst, inputArr);
    });
    afterEach(() => {
      spyOnFindMinFromCurrent.mockClear();
      spyOnFindMaxFromCurrent.mockClear();
    });
    it('Contain: if root === null, return false', () => {
      const bst = new BinarySearchTree();
      expect(bst.contain(noExistNumber)).toBeFalsy();
    });
    it('Contain: Exist number should contain in Bst ', () => {
      expect(bst.contain(existNumber)).toBeTruthy();
    });
    it('Contain: No Exist number should not contain in Bst ', () => {
      expect(bst.contain(noExistNumber)).toBeFalsy();
    });
    it('Find: if root === null, return false', () => {
      const bst = new BinarySearchTree();
      expect(bst.find(noExistNumber)).toBeFalsy();
    });
    it("Find: should return Node's value is Exist number", () => {
      const targetNode = bst.find(existNumber);
      expect(targetNode?.value).toBe(existNumber);
    });
    it('Find: should return null when find No Exist number', () => {
      expect(bst.find(noExistNumber)).toBeNull();
    });
    it('Find Min: should return minumum value of BST', () => {
      const min = Math.min(...inputArr); // 0
      expect(bst.findMin()?.value).toBe(min);
    });
    it('Find Min: should call findMinFromCurrent method', () => {
      const min = Math.min(...inputArr); // 0
      expect(bst.findMin()?.value).toBe(min);
      expect(spyOnFindMinFromCurrent).toBeCalled();
    });
    it('Find Min: If root === null, return false', () => {
      const bst = new BinarySearchTree();
      expect(bst.findMin()).toBeNull();
    });
    it('Find Min from Current: should return minumum value of current Node', () => {
      const min = Math.min(...inputArr); // 0
      expect(bst.findMinFromCurrent(4)?.value).toBe(min);
      expect(bst.findMinFromCurrent(10)?.value).toBe(8);
    });
    it("If current doesn't existed in bst, Find min from current should return null", () => {
      expect(bst.findMinFromCurrent(noExistNumber)).toBeNull();
    });
    it('Result of Find Min & Find Min from root should be same ', () => {
      const root = bst.getRoot();
      const min = bst.findMin()?.value;
      const minFromRoot = bst.findMinFromCurrent(root!.value)?.value;
      expect(min).toBe(minFromRoot);
    });
    it('Find max: should return maximum value of BST', () => {
      const max = Math.max(...inputArr); // 44
      expect(bst.findMax()?.value).toBe(max);
    });
    it('Find max: should call findMaxFromCurrent method', () => {
      const max = Math.max(...inputArr); // 44
      expect(bst.findMax()?.value).toBe(max);
      expect(spyOnFindMaxFromCurrent).toBeCalled();
    });
    it('Find max: If root === null, return false', () => {
      const bst = new BinarySearchTree();
      expect(bst.findMax()).toBeNull();
    });
    it('Find max from Current: should return maximum value of current Node', () => {
      const max = Math.max(...inputArr); // 44
      expect(bst.findMaxFromCurrent(2)?.value).toBe(3);
      expect(bst.findMaxFromCurrent(10)?.value).toBe(max);
    });
    it("If current doesn't existed in bst, Find max from current should return null", () => {
      expect(bst.findMaxFromCurrent(noExistNumber)).toBeNull();
    });
    it('Result of Find Max & Find Max from root should be same ', () => {
      const root = bst.getRoot();
      const max = bst.findMax()?.value;
      const maxFromRoot = bst.findMaxFromCurrent(root!.value)?.value;
      expect(max).toBe(maxFromRoot);
    });
  });
  describe('Find parent', () => {
    let bst: BinarySearchTree<number>;
    const inputArr = [...mockNumberArr, 5, 44];
    beforeEach(() => {
      bst = new BinarySearchTree();
      bst = insertMockNumberToBst(bst, inputArr);
    });
    it("If current doesn't existed in bst, Find parent should return null", () => {
      expect(bst.findParent(noExistNumber)).toBeNull();
    });
    it('If value === root, return null', () => {
      expect(bst.findParent(rootValue)).toBeNull();
    });
    it("Should return parent Node's value", () => {
      expect(bst.findParent(10)?.value).toBe(7);
      expect(bst.findParent(8)?.value).toBe(10);
      expect(bst.findParent(1)?.value).toBe(2);
    });
  });
  describe('Delete Node', () => {
    let bst: BinarySearchTree<number>;
    const inputArr = [...mockNumberArr, 5, 44];
    beforeEach(() => {
      bst = new BinarySearchTree();
      bst = insertMockNumberToBst(bst, inputArr);
    });
    it("If root doesn't existed in bst , bst should be Same with before", () => {
      const newBst = new BinarySearchTree();
      expect(newBst.delete(noExistNumber)).toStrictEqual(newBst);
    });
    it('If value === root, bst should be null', () => {
      const newBst = new BinarySearchTree();
      expect(bst.delete(rootValue)).toStrictEqual(newBst);
    });
    it("If current doesn't existed in bst, bst should be Same with before", () => {
      expect(bst.delete(noExistNumber)).toStrictEqual(bst);
    });
    it("If current doesn't has parent in bst, bst should be Same with before", () => {
      expect(bst.delete(noExistNumber)).toStrictEqual(bst);
    });
    it("If current doesn't existed in bst, bst should be Same with before", () => {
      expect(bst.delete(noExistNumber)).toStrictEqual(bst);
    });
    it("if target doesn't has any children Node, maintain structure", () => {
      let newBst = new BinarySearchTree<number>();
      const arr = inputArr.filter((num) => num !== valueWithNochildren);
      newBst = insertMockNumberToBst(newBst, arr);
      //valueWithNochildren = 0
      expect(bst.delete(valueWithNochildren)).toStrictEqual(newBst);
    });
    it('if target has one child Node, main structure when moving childNode to target ', () => {
      let newBst = new BinarySearchTree<number>();
      const arr = [6, 4, 2, 1, 3, 0, 5, 10, 8, 9, 44];
      newBst = insertMockNumberToBst(newBst, arr);
      // valueWithOneChild = 7
      expect(bst.delete(valueWithOneChild)).toStrictEqual(newBst);
    });
    it('if target has two child children, main structure replacing it with the smallest value of the node larger than target', () => {
      let newBst = new BinarySearchTree<number>();
      const arr = [rootValue, 5, 2, 7, 1, 10, 8, 0, 9, 3, 44]; // 6 == root
      newBst = insertMockNumberToBst(newBst, arr);
      // valueWithTwoChildren = 4
      expect(bst.delete(valueWithTwoChildren)).toStrictEqual(newBst);
    });
  });
});

describe('Traversal', () => {
  let bst: BinarySearchTree<number>;
  const inputArr = [...mockNumberArr, 5, 44];
  beforeEach(() => {
    bst = new BinarySearchTree();
    bst = insertMockNumberToBst(bst, inputArr);
  });
  it('InOrder Traversal', () => {
    expect(bst.inOrderTraversal()).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 44]);
  });
  it('PreOrder Traversal', () => {
    expect(bst.preOrderTraversal()).toStrictEqual([6, 4, 2, 1, 0, 3, 5, 7, 10, 8, 9, 44]);
  });
  it('PostOrder Traversal', () => {
    expect(bst.postOrderTraversal()).toStrictEqual([0, 1, 3, 2, 5, 4, 9, 8, 44, 10, 7, 6]);
  });
});
