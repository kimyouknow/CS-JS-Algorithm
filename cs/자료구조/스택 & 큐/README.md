📌 목차

1. [스택](#-스택)
2. [큐](#큐)

# 스택

- LIFO(후입선출): 가장 나중에 들어온 것이 가장 먼저 나옴
- top으로 정한 곳을 통해서만 접근 가능
- top으로 넣고, 가장 최근 것만 뺄 수 있음
- stack underflow: 스택이 비어 있는데 요소를 추출하는 경우
- stack overflow: 스택이 넘치는 경우

## 사용예시

- Ctrl+Z(되돌리기)
- 웹 브라우저 방문기록
- 후위 표기법 계산
- 연산자 우선순위 구현

## 구현

- 배열로 구현하여 pop, push로 구현 가능
- 혹은 배열로 구현하되 sp(stack pointer)를 활용하여 stack의 size와 sp를 비교하여 구현 가능
- 배열이나 obj로 하면 pop할 때, null같은 "값"으로 채워야해서 연결리스트로 가상의 공간을 만들어 구현
- 각 node에 `prev`를 두어 이전 값을 기억
- `push`: stack에 넣기
- `pop`: 제일 최근에 넣은 값을 stack에서 빼기
- `clear`: stack 비우기

```js
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor(size) {
    this.size = size;
    this.sp = 0;
    this.top = null;
  }
  show() {
    const showArr = [];
    let current = this.top;
    while (current) {
      showArr.push(current.value);
      current = current.prev;
    }
    console.log(this.size, showArr);
  }
  push(value) {
    try {
      if (this.size > this.sp) {
        const newNode = new Node(value);
        if (this.sp === 0) {
          this.top = newNode;
        } else {
          const point = this.top;
          this.top = newNode;
          this.top.prev = point;
        }
        this.sp++;
        return newNode;
      } else {
        throw Error("Stack is full");
      }
    } catch (error) {
      return error.message;
    }
  }
  pop() {
    try {
      if (this.sp <= 0) throw Error("Stack is empty");
      const target = this.top; // 출력용
      const point = this.top.prev;
      this.top = point;
      this.sp--;
      return target;
    } catch (error) {
      return error.message;
    }
  }
  clear() {
    this.sp = 0;
    this.top = null;
    return this.top;
  }
}
```

# 큐

- FIFO(선입선출): 가장 처음에 들어온 것이 가장 먼저 나옴
- heal: 삭제 연산(`dnQueue`)
- tail: 추가 연산(`enQueue`)
- head와 tail로만 접근 가능

## 사용예시

- 대기 순(은행업무, 고객 대기시간, 수강신청, 표 예매 등등)
- 캐시 구현
- BFS(너비 우선 탐색)
- 프로세스 관리

## 구현

- 배열로 push와 unshift를 사용할 수 있지만, unshift 메서드는 배열의 앞부분에 동작하여 다른 요소들의 index 변화를 유발함.
- 순수한 큐를 구현하기 위해 `연결리스트`를 활용하여 구현
- `단일연결리스트`로 구현하면 push할 때 while(current)를 활용해 head부터시작해 끝값을 찾아야함 -> `tail`을 활용하여 `tail.next`에 새로운 값 바로 추가

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  show() {
    const showArr = [];
    let current = this.head;
    while (current) {
      showArr.push(current.value);
      current = current.next;
    }
    console.log(this.size, showArr);
  }
  enQueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
    return this.tail;
  }
  dnQueue() {
    if (this.size === 0) {
      return "Queue is Empty";
    }
    const point = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return point;
  }
}
```
