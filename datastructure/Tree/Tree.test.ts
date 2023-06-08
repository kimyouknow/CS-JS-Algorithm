import TreeNode, { makeExampleTree } from './index';

describe('Tree', () => {
  describe('Tree 선언', () => {
    it('Root 노드의 높이가 0이어야 합니다.', () => {
      const tree = new TreeNode('tree');
      expect(tree.getHeight()).toBe(0);
    });
  });
  describe('insertSubTree Tree', () => {
    let tree: TreeNode<string>;
    let subtree: TreeNode<string>;
    let thirdTree: TreeNode<string>;
    let spyOnInsertSubTree: jest.SpyInstance;
    beforeEach(() => {
      tree = new TreeNode('tree');
      subtree = new TreeNode('subtree');
      thirdTree = new TreeNode('thirdTree');
      spyOnInsertSubTree = jest.spyOn(tree, 'insertSubTree');
      tree.insertSubTree(subtree);
      subtree.insertSubTree(thirdTree);
    });
    afterEach(() => {
      spyOnInsertSubTree.mockClear();
    });
    it('addChildren은 인자로 Tree가 아닌 값을 받아야 합니다.', () => {
      const params = spyOnInsertSubTree.mock.calls[0];
      params.forEach((param: TreeNode<string>) => {
        expect(param).toBeInstanceOf(TreeNode);
      });
    });
    it('addChildren은 인자로 1하나 이상의 값을 받아야 합니다.', () => {
      const params = spyOnInsertSubTree.mock.calls[0];
      expect(params.length).toBeGreaterThanOrEqual(1);
    });
    it('하위 노드의 높이는 그 전 노드의 높이보다 1만큼 커야합니다.', () => {
      const tree = new TreeNode('tree');
      expect(tree.getHeight()).toBe(0);
      expect(subtree.getHeight()).toBe(1);
      expect(thirdTree.getHeight()).toBe(2);
    });
  });
  describe('addChildren Tree', () => {
    let tree: TreeNode<string>;
    let spyOnAddChildren: jest.SpyInstance;
    beforeEach(() => {
      tree = new TreeNode('tree');
      spyOnAddChildren = jest.spyOn(tree, 'addChildren');
      tree.addChildren('subtree', 'thirdTree');
    });
    afterEach(() => {
      spyOnAddChildren.mockClear();
    });
    it('addChildren은 인자로 Tree가 아닌 값을 받아야 합니다.', () => {
      const params = spyOnAddChildren.mock.calls[0];
      params.forEach((param: string) => {
        expect(param).not.toBeInstanceOf(TreeNode);
      });
    });
    it('addChildren은 인자로 1하나 이상의 값을 받아야 합니다.', () => {
      const params = spyOnAddChildren.mock.calls[0];
      expect(params.length).toBeGreaterThanOrEqual(1);
    });
    it('하위 노드의 높이는 그 전 노드의 높이보다 1만큼 커야합니다.', () => {
      expect(tree.getHeight()).toBe(0);
      tree
        .getChildren()
        .forEach((childTree) => expect(childTree.getHeight()).toBe(1));
    });
  });
  describe('find Target in Tree', () => {
    let tree: TreeNode<string>;
    beforeEach(() => {
      tree = makeExampleTree();
    });
    it('찾고자 value를 입력하면 해당 node를 반환합니다.', () => {
      const res = new TreeNode('8', 3);
      expect(tree.find('8')).toStrictEqual(res);
    });
    it('찾고자하는 node가 없으면 null을 반환합니다.', () => {
      expect(tree.find('empty')).toBeNull();
    });
  });
});

describe('delete Target In Tree', () => {
  let tree: TreeNode<string>;
  beforeEach(() => {
    tree = makeExampleTree();
  });
  it('삭제하고자하는 value를 가진 Tree를 제거합니다.', () => {
    tree.delete('6');
    expect(tree.find('6')).toBeNull();
  });
  it('해당 트리(3)의 자식 요소(3-1,3-2,3-3)이 없어야 합니다.', () => {
    tree.delete('3');
    expect(tree.find('3-1')).toBeNull();
    expect(tree.find('3-2')).toBeNull();
    expect(tree.find('3-3')).toBeNull();
  });
  it('입력한 값이 없으면 아무런 동작을 실행하지 않습니다.', () => {
    tree.delete('empty');
    expect(tree).toStrictEqual(tree);
  });
});

describe('순회', () => {
  let tree: TreeNode<string>;
  beforeEach(() => {
    tree = makeExampleTree();
  });
  it('DFS', () => {
    expect(tree.traverseDFS()).toBe(
      'height: 0, value: 1\nheight: 1, value: 2\nheight: 2, value: 2-1\nheight: 2, value: 2-2\nheight: 2, value: 2-3\nheight: 2, value: 3\nheight: 3, value: 3-1\nheight: 3, value: 3-2\nheight: 3, value: 3-3\nheight: 1, value: 4\nheight: 2, value: 5\nheight: 3, value: 6\nheight: 4, value: 7\nheight: 3, value: 8'
    );
  });
  it('BFS', () => {
    expect(tree.traverseBFS()).toBe(
      'height: 0, value: 1\nheight: 1, value: 2\nheight: 1, value: 4\nheight: 2, value: 2-1\nheight: 2, value: 2-2\nheight: 2, value: 2-3\nheight: 2, value: 3\nheight: 2, value: 5\nheight: 3, value: 3-1\nheight: 3, value: 3-2\nheight: 3, value: 3-3\nheight: 3, value: 6\nheight: 3, value: 8\nheight: 4, value: 7'
    );
  });
});
