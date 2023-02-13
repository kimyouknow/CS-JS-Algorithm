import { Nullable } from '@utils/types';

export const success = 'success' as const;
export const fail = 'fail' as const;
export type resultType = typeof success | typeof fail;
export type NodeBody = { [key: string]: any } | string | number;
export type NodeNext = Nullable<INodeElement>;

export interface INodeElement {
  next: NodeNext;
  body: NodeBody;
}

export interface ISingleLinkedList {
  size: number;
  head: Nullable<NodeElement>;
  getHead: () => Nullable<NodeElement>;
  getSize: () => number;
  addSize: () => void;
  subtractSize: () => void;
  push: (data: NodeBody) => resultType;
  unshift: (data: NodeBody) => resultType;
  search: (index: number) => Nullable<INodeElement>;
  insert: (index: number, data: NodeBody) => resultType;
  delete: (index: number) => resultType;
  printNodes: () => void;
}

export const findLastNode = (headNode: INodeElement) => {
  let current = headNode;
  while (current !== null && current.next !== null) {
    current = current.next;
  }
  return current;
};

export const handleMethodWithRandomNumber = (
  method: 'push' | 'unshift',
  randomInt: number,
  mockSingleLinkedList: ISingleLinkedList,
  mockNodeBody: NodeBody
) => {
  for (let i = randomInt; i > 0; i--) {
    mockSingleLinkedList[method](mockNodeBody);
  }
};

export const generateInstance = () => new SingleLinkedList();

export const generateInstanceWithMockArray = (
  method: 'push' | 'unshift',
  mockArray: { title: string; id: string }[]
) => {
  const instance = generateInstance();
  mockArray.forEach((mockElement) => instance[method](mockElement));
  return instance;
};

export class NodeElement implements INodeElement {
  body: NodeBody;
  next: NodeNext;
  constructor(body: NodeBody, nextNode: NodeNext) {
    this.body = body;
    this.next = nextNode;
  }
}

export class SingleLinkedList implements ISingleLinkedList {
  size: number;
  head: Nullable<NodeElement>;
  constructor() {
    this.size = 0;
    this.head = null;
  }
  getHead() {
    return this.head;
  }
  getSize() {
    return this.size;
  }
  addSize() {
    this.size++;
  }
  subtractSize() {
    this.size--;
  }
  push(data: NodeBody) {
    const newNode = new NodeElement(data, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const lastNode = findLastNode(this.head);
      lastNode.next = newNode;
    }
    this.addSize();
    return success;
  }
  unshift(data: NodeBody) {
    const newNode = new NodeElement(data, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.addSize();
    return success;
  }
  search(index: number) {
    let current = this.head;
    let count = 0;
    if (index > this.size) return null;
    if (index === 0) return current;
    while (current !== null && current.next !== null) {
      if (count === index) break;
      current = current?.next;
      count++;
    }
    return current;
  }
  insert(index: number, data: NodeBody) {
    if (index === 0) {
      this.unshift(data);
      return success;
    }
    if (index === this.size) {
      this.push(data);
      return success;
    }
    if (index > this.size) return success;
    const newNode = new NodeElement(data, null);
    const targetNode = this.search(index);
    if (targetNode) {
      newNode.next = targetNode.next;
      targetNode.next = newNode;
    }
    this.addSize();
    return success;
  }
  delete(index: number) {
    let current = this.head;
    if (this.size <= 0) return fail;
    if (current === null) return fail;
    if (index === 0) {
      this.head = current.next;
      return success;
    }
    let beforeCurrent = current;
    let count = 0;
    while (current !== null && current.next !== null) {
      if (count === index) {
        break;
      }
      beforeCurrent = current;
      current = current.next;
      count++;
    }
    beforeCurrent.next = current.next;
    this.subtractSize();
    return success;
  }
  printNodes() {
    let current = this.head;
    while (current !== null) {
      console.log(current.body);
      current = current.next;
    }
  }
}

export const sampleBodyArray = [
  {
    title: 'Bagrāmī',
    id: '8069374b-de65-4171-ad19-5f8037b02541',
  },
  {
    title: 'Diriomo',
    id: '320a3334-3b78-429a-b23f-babf199d84f7',
  },
  {
    title: 'Poniklá',
    id: '955bde7c-e5c8-43a7-a0d3-e55b2eb4799c',
  },
  {
    title: 'Jaqué',
    id: 'd68135bf-cf73-47a0-a263-355a837be4c1',
  },
  {
    title: 'Timoulilt',
    id: 'b2376f38-74eb-4880-a95c-1631506dd188',
  },
  {
    title: 'Gjoa Haven',
    id: 'b260a7ce-9ea3-45ac-941f-4d6df6ca485f',
  },
  {
    title: 'Menzel Jemil',
    id: 'dc2c38e0-50d6-4fb4-85de-52d22e98ec6f',
  },
  {
    title: 'Tucdao',
    id: '39cb9bf4-17f7-40fe-bf8a-a53408f53886',
  },
  {
    title: 'Qijiawan',
    id: '6e40f81c-8e46-4af8-b4cd-af92e9bd50ac',
  },
  {
    title: 'Rízoma',
    id: 'c8eec769-4876-4257-a272-431ae3a680ac',
  },
  {
    title: 'Jamaica',
    id: '2b7b7994-587a-4970-b5f3-db34a1e6a94d',
  },
  {
    title: 'Reshetnikovo',
    id: '3dfbfb49-6a7a-43c8-a565-82a73c9820c9',
  },
  {
    title: 'Kargasok',
    id: '864290b1-9415-4727-a0f8-5d690fe0b4c1',
  },
  {
    title: 'Fort Worth',
    id: 'a7e056be-264f-496a-a34f-81389d87c2ea',
  },
  {
    title: 'Trzcinica',
    id: '17e58929-a2cd-40e8-84ba-2adb2b981428',
  },
  {
    title: 'Ximapo',
    id: '94988d8e-44dc-4302-a13a-24bca4f3483e',
  },
  {
    title: 'Tidaholm',
    id: '3013bdaf-04eb-4992-9559-792a00a81d59',
  },
  {
    title: 'Storozhynets’',
    id: 'deb2579e-e80a-460d-84c1-4c61e0be5a5b',
  },
  {
    title: 'Mlandizi',
    id: '036125c1-1fe8-410b-bce7-57bb3860601d',
  },
  {
    title: 'Angered',
    id: '45817189-24e6-41b4-a519-d4ca60bd7cd5',
  },
];
