// ds_algorithms/queue.js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  toArray() {
    return this.items.slice(); // Return a copy of the items as an array
  }
}

module.exports = Queue;
