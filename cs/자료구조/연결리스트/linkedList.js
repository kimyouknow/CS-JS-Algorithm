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
  show() {
    const showArr = [];
    let current = this.head;
    while (current) {
      showArr.push(current.value);
      current = current.next;
    }
    console.log(this.size, showArr);
  }
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
    return newNode;
  }
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
  delete(value) {
    let current = this.head;
    let prev = null;
    if (!current) {
      return "SSL is empty";
    } else {
      while (current.next) {
        if (current.value === value) {
          // 이전 것의 next를 다음 것의 next로 변경
          // console.log(prev.value, current.value, current.next.value);
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
  reverse() {}
}

const ssl = new SingleLinkedList();
console.log(ssl.push(1));
console.log(ssl.push(2));
console.log(ssl.push(3));
console.log(ssl.push(4));
// console.log(ssl.search(3));
ssl.show();
console.log(ssl.delete(3));
ssl.show();
console.log(ssl.insert(5, 2));
console.log(ssl.insert(9, 0));
console.log(ssl.insert(10, 10));
ssl.show();
ssl.reverse();
ssl.show();
