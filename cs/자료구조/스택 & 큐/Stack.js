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

const stack = new Stack(6);
console.log(stack);
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
stack.show();
console.log(stack.pop());
console.log(stack.pop());
stack.show();
