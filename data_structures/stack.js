// ds_algorithms/stack.js
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  toArray() {
    return this.items.slice(); // Return a copy of the items as an array
  }
}

module.exports = Stack;
