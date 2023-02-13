import { getRandomInt } from '@utils/utils';
import {
  findLastNode,
  INodeElement,
  ISingleLinkedList,
  NodeBody,
  NodeElement,
  handleMethodWithRandomNumber,
  SingleLinkedList,
  generateInstance,
  success,
  fail,
} from './index';

const mockNodeHead: NodeBody = { head: 'head' };
const mockNodeBody: NodeBody = { body: '123', info: 'info' };
const mockNodeLast: NodeBody = { last: 'last' };
const mockSpecial: NodeBody = { special: '!!!' };
const mockNewNode: INodeElement = new NodeElement(mockNodeBody, null);

describe('LinkedList Tester', () => {
  describe('push()', () => {
    describe('size === 0일 때 push()', () => {
      it('연결리스트 인스턴스의 push메서드 존재하니', () => {
        const mockSingleLinkedList = generateInstance();
        expect(typeof mockSingleLinkedList.push).toBe('function');
        expect(mockSingleLinkedList.push(mockNodeBody)).toBe(success);
      });
      it('push 실행 이후 연결리스트의 인스턴스의 길이가 1인가', () => {
        const mockSingleLinkedList = generateInstance();
        expect(mockSingleLinkedList.push(mockNodeBody)).toBe(success);
        expect(mockSingleLinkedList.getSize()).toBe(1);
      });
      it('push 실행 이후 연결리스트의 head의 속성이 올바르게 있는지', () => {
        const mockSingleLinkedList = generateInstance();
        expect(mockSingleLinkedList.push(mockNodeBody)).toBe(success);
        const head = mockSingleLinkedList.getHead();
        expect(head).toStrictEqual(mockNewNode);
        expect(head?.next).toBeNull();
        expect(head?.body).toStrictEqual(mockNodeBody);
      });
    });
    describe('size !== 0일 때 push()', () => {
      let randomInt: number;
      beforeEach(() => {
        randomInt = getRandomInt(1, 10);
      });
      it('연결리스트 인스턴스의 push메서드 존재', () => {
        const mockSingleLinkedList = new SingleLinkedList();
        expect(typeof mockSingleLinkedList.push).toBe('function');
        expect(mockSingleLinkedList.push(mockNodeLast)).toBe(success);
      });
      it('push 실행 이후 연결리스트의 인스턴스의 길이가 추가한 길이와 같은가', () => {
        const mockSingleLinkedList = generateInstance();
        mockSingleLinkedList.push(mockNodeHead);
        handleMethodWithRandomNumber('push', randomInt, mockSingleLinkedList, mockNodeBody);
        expect(mockSingleLinkedList.getSize()).toBe(randomInt + 1);
      });
      it('push 실행 이후 연결리스트의 head의 마지막에 push한 노드인지', () => {
        const mockSingleLinkedList = generateInstance();
        mockSingleLinkedList.push(mockNodeHead);
        handleMethodWithRandomNumber('push', randomInt, mockSingleLinkedList, mockNodeBody);
        const head = mockSingleLinkedList.getHead();
        expect(head?.next).not.toBeNull();
        expect(head?.body).toStrictEqual(mockNodeHead);
      });
      it('push 실행 이후 연결리스트의 마지막 노드가 새롭게 추가된 노드와 같은가', () => {
        const mockSingleLinkedList = generateInstance();
        mockSingleLinkedList.push(mockNodeHead);
        handleMethodWithRandomNumber('push', randomInt, mockSingleLinkedList, mockNodeBody);
        mockSingleLinkedList.push(mockNodeLast);
        const head = mockSingleLinkedList.getHead();
        const lastNode = head && findLastNode(head);
        expect(lastNode?.body).toStrictEqual(mockNodeLast);
      });
    });
  });

  describe('unshift', () => {
    describe('size === 0일 때 unshift()', () => {
      it('연결리스트 인스턴스의 unshift메서드 존재하니', () => {
        const mockSingleLinkedList = generateInstance();
        expect(typeof mockSingleLinkedList.unshift).toBe('function');
        expect(mockSingleLinkedList.unshift(mockNodeBody)).toBe(success);
      });
      it('unshift 실행 이후 연결리스트의 인스턴스의 길이가 1인가', () => {
        const mockSingleLinkedList = generateInstance();
        expect(mockSingleLinkedList.unshift(mockNodeBody)).toBe(success);
        expect(mockSingleLinkedList.getSize()).toBe(1);
      });
      it('unshift 실행 이후 연결리스트의 head의 속성이 올바르게 있는지', () => {
        const mockSingleLinkedList = generateInstance();
        expect(mockSingleLinkedList.unshift(mockNodeBody)).toBe(success);
        const head = mockSingleLinkedList.getHead();
        expect(head).toStrictEqual(mockNewNode);
        expect(head?.next).toBeNull();
        expect(head?.body).toStrictEqual(mockNodeBody);
      });
    });
    describe('size !== 0일 때 unshift()', () => {
      let randomInt: number;
      beforeEach(() => {
        randomInt = getRandomInt(1, 10);
      });
      it('연결리스트 인스턴스의 unshift메서드 존재', () => {
        const mockSingleLinkedList = new SingleLinkedList();
        expect(typeof mockSingleLinkedList.push).toBe('function');
        expect(mockSingleLinkedList.unshift(mockNodeBody)).toBe(success);
      });
      it('실행 이후 연결리스트의 인스턴스의 길이가 추가한 길이와 같은가', () => {
        const mockSingleLinkedList = generateInstance();
        mockSingleLinkedList.unshift(mockNodeHead);
        handleMethodWithRandomNumber('unshift', randomInt, mockSingleLinkedList, mockNodeBody);
        expect(mockSingleLinkedList.getSize()).toBe(randomInt + 1);
      });
      it('연결리스트의 head의 처음에 unshift메서드인지', () => {
        const mockSingleLinkedList = generateInstance();
        handleMethodWithRandomNumber('unshift', randomInt, mockSingleLinkedList, mockNodeBody);
        mockSingleLinkedList.unshift(mockNodeLast);
        const head = mockSingleLinkedList.getHead();
        expect(head?.next).not.toBeNull();
        expect(head?.body).toStrictEqual(mockNodeLast);
      });
      it('연결리스트의 마지막 노드가 처음 unshift된 노드와 같은가', () => {
        const mockSingleLinkedList = generateInstance();
        mockSingleLinkedList.unshift(mockNodeHead);
        handleMethodWithRandomNumber('unshift', randomInt, mockSingleLinkedList, mockNodeBody);
        mockSingleLinkedList.unshift(mockNodeLast);
        const head = mockSingleLinkedList.getHead();
        const lastNode = head && findLastNode(head);
        expect(lastNode?.body).toStrictEqual(mockNodeHead);
      });
    });
  });

  describe('search()', () => {
    let mockSingleLinkedList: ISingleLinkedList;
    let randomInt: number;
    beforeEach(() => {
      mockSingleLinkedList = generateInstance();
      randomInt = getRandomInt(10, 20);
      handleMethodWithRandomNumber('push', randomInt, mockSingleLinkedList, mockNodeBody);
    });
    it('연결리스트에 search(index)가 존재하나', () => {
      expect(typeof mockSingleLinkedList.search).toBe('function');
    });
    it('index > size => null', () => {
      const mockIndex = randomInt + 5;
      expect(mockSingleLinkedList.search(mockIndex)).toBeNull();
    });
    it('index <= size => 찾은 노드', () => {
      const mockIndex = getRandomInt(2, 9);
      const targetNode = mockSingleLinkedList.search(mockIndex);
      // expect(targetNode).toHaveProperty('body');
      // expect(targetNode).toHaveProperty('next');
      expect(targetNode).toMatchObject({
        body: expect.anything(),
        next: expect.anything(),
      });
    });
  });

  describe('insert()', () => {
    let mockSingleLinkedList: ISingleLinkedList;
    let randomInt: number;
    beforeEach(() => {
      mockSingleLinkedList = generateInstance();
      randomInt = getRandomInt(10, 20);
      handleMethodWithRandomNumber('push', randomInt, mockSingleLinkedList, mockNodeBody);
    });
    it('연결리스트에 insert메서드(data, index)가 존재하나', () => {
      expect(typeof mockSingleLinkedList.insert).toBe('function');
      expect(mockSingleLinkedList.insert(0, mockSpecial)).toBe(success);
    });
    it('index === 0 일 때 insert() 실행', () => {
      const mockIndex = 0;
      const originSize = mockSingleLinkedList.getSize();
      expect(mockSingleLinkedList.insert(mockIndex, mockSpecial)).toBe(success);
      const updateSize = mockSingleLinkedList.getSize();
      const updateHead = mockSingleLinkedList.getHead();
      expect(updateSize).toBe(originSize + 1);
      expect(updateHead?.body).toStrictEqual(mockSpecial);
    });
    it('index === size 일 때 insert() 실행', () => {
      const originSize = mockSingleLinkedList.getSize();
      const mockIndex = originSize;
      expect(mockSingleLinkedList.insert(mockIndex, mockSpecial)).toBe(success);
      const updateSize = mockSingleLinkedList.getSize();
      const updateLast = mockSingleLinkedList.search(updateSize);
      expect(updateSize).toBe(originSize + 1);
      expect(updateLast?.body).toStrictEqual(mockSpecial);
    });
    it('index > size 일 때 insert() 실행', () => {
      const originSize = mockSingleLinkedList.getSize();
      const mockIndex = originSize + 1;
      expect(mockSingleLinkedList.insert(mockIndex, mockSpecial)).toBe(success);
      const updateSize = mockSingleLinkedList.getSize();
      expect(originSize).toBe(updateSize);
    });
    it('0 < index < size 일 때, insert() 실행', () => {
      const originSize = mockSingleLinkedList.getSize();
      const mockIndex = randomInt - 5; // 10 <= randomInt <= 20
      expect(mockSingleLinkedList.insert(mockIndex, mockSpecial)).toBe(success);
      const updateSize = mockSingleLinkedList.getSize();
      const targetNode = mockSingleLinkedList.search(mockIndex + 1);
      expect(updateSize).toBe(originSize + 1);
      expect(targetNode?.body).toStrictEqual(mockSpecial);
    });
  });

  describe('delete()', () => {
    let mockSingleLinkedList: ISingleLinkedList;
    let randomInt: number;
    beforeEach(() => {
      mockSingleLinkedList = generateInstance();
      randomInt = getRandomInt(10, 20);
      handleMethodWithRandomNumber('push', randomInt, mockSingleLinkedList, mockNodeBody);
    });
    it('연결리스트에 delete(index)가 존재하나', () => {
      expect(typeof mockSingleLinkedList.delete).toBe('function');
      expect(mockSingleLinkedList.delete(0)).toBe(success);
    });
    it('size <= 0 => 요소를 삭제하지 않기 ', () => {
      mockSingleLinkedList = generateInstance();
      randomInt = getRandomInt(10, 20);
      expect(mockSingleLinkedList.delete(randomInt)).toBe(fail);
    });
    it('head === null => 요소를 삭제하지 않기', () => {
      mockSingleLinkedList = generateInstance();
      randomInt = getRandomInt(10, 20);
      expect(mockSingleLinkedList.delete(randomInt)).toBe(fail);
    });
    it('0 <= index <= size => 연결리스트의 사이즈가 -1 되었는지', () => {
      const mockIndex = getRandomInt(1, randomInt);
      const originSize = mockSingleLinkedList.getSize();
      expect(mockSingleLinkedList.delete(mockIndex)).toBe(success);
      const newSize = mockSingleLinkedList.getSize();
      expect(originSize - 1).toBe(newSize);
    });
    it('index === 0 => head를 삭제하기', () => {
      const mockIndex = 0;
      const originHead = mockSingleLinkedList.getHead();
      expect(mockSingleLinkedList.delete(mockIndex)).toBe(success);
      const newHead = mockSingleLinkedList.getHead();
      expect(originHead).not.toEqual(newHead);
      expect(originHead?.next).toStrictEqual(newHead);
    });
    it('0 < index <= size => target을 올바르게 제거했는지', () => {
      const mockIndex = getRandomInt(1, randomInt);
      const target = mockSingleLinkedList.search(mockIndex);
      expect(mockSingleLinkedList.delete(mockIndex)).toBe(success);
      const beforeTarget = mockSingleLinkedList.search(mockIndex - 1);
      expect(beforeTarget?.next).not.toEqual(target);
    });
    it('0 < index <= size => berforeTarget의 next가 target의 next와 같아졌는지', () => {
      const mockIndex = getRandomInt(1, randomInt);
      const afterTarget = mockSingleLinkedList.search(mockIndex + 1);
      expect(mockSingleLinkedList.delete(mockIndex)).toBe(success);
      const beforeTarget = mockSingleLinkedList.search(mockIndex - 1);
      expect(beforeTarget?.next).toStrictEqual(afterTarget);
    });
  });
});
