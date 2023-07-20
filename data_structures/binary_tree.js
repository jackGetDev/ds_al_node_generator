// ds_algorithms/data_structures/binary_tree.js
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(parentNode, newNode) {
    if (Math.random() < 0.5) {
      if (parentNode.left === null) {
        parentNode.left = newNode;
      } else {
        this._insertNode(parentNode.left, newNode);
      }
    } else {
      if (parentNode.right === null) {
        parentNode.right = newNode;
      } else {
        this._insertNode(parentNode.right, newNode);
      }
    }
  }
}

module.exports = BinaryTree;
