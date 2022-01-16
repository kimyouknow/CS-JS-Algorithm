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
      showArr.push(current);
      current = current.next;
    }
    console.log(this.size, showArr);
  }
  add(value) {
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
}

module.exports = {
  SingleLinkedList,
};
