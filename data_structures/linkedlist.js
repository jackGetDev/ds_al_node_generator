// ds_algorithms/data_structures/linkedlist.js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.emailSet = new Set();
  }

  // Insert a new node at the end of the linked list (with unique emails)
  append(data) {
    if (!this.emailSet.has(data.email)) {
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.emailSet.add(data.email);
      this.size++;
    }
  }

  // Read the entire linked list and return an array of all data
  getAllData() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  // Find the first occurrence of a value in the linked list and return its index (or -1 if not found)
  searchByEmail(email) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.data.email === email) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Update a value at a specific index in the linked list
  update(index, newValue) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range.');
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.data = newValue;
  }

  // Delete a node at a specific index in the linked list
  delete(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range.');
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      if (index === this.size - 1) {
        this.tail = previous;
      }
    }

    this.size--;
  }
}

module.exports = LinkedList;
