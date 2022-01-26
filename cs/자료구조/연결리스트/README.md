## ✅ 배열과 연결리스트

### 키워드

> 배열, 연결 리스트

# 특징 및 구조

- (단일) 연결 리스트는 노드들의 연결로 이루어진 리스트이다.
- 흔히 사용하는 Array리스트와 달리 메모리상에 인덱스에 의해 물리적으로 연결되어 있지 않고, `노드간 참조`로 연결되어 있다. 따라서 데이터들은 메인 메모리상에 흩어져 존재할 수 있다.
- 각 노드는 `노드의 값`과 `다음 노드`라는 두 가지 정보를 가지고 있다.
- 첫 노드를 `HEAD`노드라고 하며, `HEAD`노드부터 순서대로 모든 노드를 탐색할 수 있다.

# 배열과 비교

|           | 배열                                                                        | 연결리스트                                                   |
| --------- | --------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 특징      | 인덱스를 통해 접근 가능                                                     | 노드 단위로 순차적으로 연결되어 있음                         |
| 삽입/삭제 | 특정 위치에 값을 삽입하거나 삭제하는 경우 리스트의 모든 요소를 이동시켜야함 | 노드로 연결되어 있어 참조부분만 수정하면 간단히 구현 가능    |
| 탐색      | 메모리 공간에 연속적으로 저장되어 있어, 인덱스를 활용해 빠르게 접근 가능    | 노드들이 순차적으롱 연결되어 있어, 처음노드부터 찾아야 한다. |
| 구현      | 비교적 간단                                                                 | 비교적 복잡                                                  |

> ### 탐색과 정렬을 자주 한다면 배열 리스트

> ### 추가와 삭제(수정)가 많다면 연결 리스트

# 종류

## 단일 연결리스트

### ✔ 특징

- 단방향으로 연결되어 있으며, 마지막 노드의 `next`는 null.

### 활용

- ?

## 이중 연결리스트

### ✔ 특징

- 각 노드에 `next`(다음 노드)와 `previous`(이전 노드), `value`(값)이 존재
- 순방향뿐만 아니라 역방향으로 탐색 가능.
- 단일 연결리스트에 비해 복잡하다. 관리해야할 참조가 2개가 있어 수정/삭제/ 정렬 등의 작업량이 많아진다.

### 활용

- ?

## 환형 연결리스트

### ✔ 특징

- `HEAD`와 `TAIL`이 연결되어 있는 구조.

### 활용

- ?

# SSL 구현

## 기본구조

- `Node`: value와 다음 노드를 가리키는 포인터 `next`, next는 기본으로 null 값을 할당.
- `SingleLinkedList`: head 정보와 편의를 위한 길이정보를 담을 size를 갖는다.

```js
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
```

## 추가

- `head가 null`이라면, `리스트가 비어 있다는 뜻`이므로, head로 설정
- head가 null이 아니라면, 마지막 노드를 찾아, `마지막 노드의 next로 새로 받은 노드를 설정`.
- `마지막 노드 찾기`: current의 next가 null일 때까지 current를 current.next로 변경

```js
  push(value) {
    const newNode = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
```

## 삽입

- `k번쨰 삽입`하기 위해서는 인자로 받은 `k가 count와 같아질때`까지 while문 반복
- while문을 반복하면서 `prev에 current를 넣고`,` current값을 current.next`으로 변경
- `while문이 끝나면` `newNode.next에 current(current.next)`를 넣고` prev.next에 newNode를 삽입`
- `k가 size보다 크면` 연결리스트의 `마지막에 삽입`
- `k가 0`이면 `맨앞에 삽입`

```js
  insert(value, idx) {
    const newNode = new Node(value);
    let current = this.head;
    if (!current) {
      return "SSL is empty";
    }
    if (idx === 0) {
      newNode.next = current;
      this.head = newNode;
      this.size++;
      return;
    }
    let prev, count;
    while (count < idx || current) {
      prev = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    prev.next = newNode;
    this.size++;
  }
```

## 삭제

- `value`를 입력받아, 해당 value에 해당하는 요소를 삭제
- 해당 value의 앞의 값과 다음값을 연결
- index기준으로 찾는 것도 같은 방법으로 구현 가능

```js
 delete(value) {
    let current = this.head;
    let prev = null;
    if (!current) {
      return "SSL is empty";
    } else {
      while (current.next) {
        if (current.value === value) {
          // 이전 것의 next를 다음 것의 next로 변경
          prev.next = current.next;
          this.size--;
          return `${value} is deleted`;
        }
        prev = current;
        current = current.next;
      }
      return `Can't find ${value}`;
    }
  }
```

## 수정(찾기)

- 삭제를 value기준으로 구현해서 수정은 idx로 구현
- 삽입과 같은 로직

```js
  edit(value, idx) {
    let current = this.head;
    if (!current) {
      return "SSL is empty";
    }
    if (idx === 0) {
      newNode.next = current;
      this.head = newNode;
      this.size++;
      return;
    }
    let count;
    while (count < idx || current) {
      current = current.next;
      count++;
    }
    current.value = value;
    this.size++;
  }
```

## 뒤집기

## 출력

- current에 head를 넣기
- current가 null일 때까지 current에 current의 next값을 넣어주기

```js
  show() {
    const showArr = [];
    let current = this.head;
    while (current) {
      showArr.push(current.value);
      current = current.next;
    }
    console.log(this.size, showArr);
  }
```

## 이중 연결 리스트

### 🔍 참고자료

- 모던 자바스크립트 deep dive, 이웅모
