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

const queue = new Queue(6);
console.log(queue);
console.log(queue.enQueue(1));
console.log(queue.enQueue(2));
queue.show();
console.log(queue.enQueue(3));
queue.show();
console.log(queue.dnQueue());
queue.show();
console.log(queue.enQueue(1));
console.log(queue.dnQueue());
queue.show();
