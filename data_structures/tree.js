// ds_algorithms/data_structures/tree.js
class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  setRoot(rootNode) {
    this.root = rootNode;
  }

  // Breadth-First Search (BFS) traversal of the tree
  bfs(visitCallback) {
    if (!this.root) return;

    const queue = [this.root];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      visitCallback(currentNode.data);

      currentNode.children.forEach(childNode => {
        queue.push(childNode);
      });
    }
  }

  // Depth-First Search (DFS) traversal of the tree
  dfs(visitCallback) {
    if (!this.root) return;

    const stack = [this.root];
    while (stack.length > 0) {
      const currentNode = stack.pop();
      visitCallback(currentNode.data);

      currentNode.children.slice().reverse().forEach(childNode => {
        stack.push(childNode);
      });
    }
  }
}

module.exports = { TreeNode, Tree };
