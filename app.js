const express = require('express');
const { generateDummyList } = require('./dummy_data/generateDummyList');
const { bfs, dfs, Stack, Queue } = require('./ds_algorithms');
const BinaryTree = require('./data_structures/binary_tree');
const LinkedList = require('./data_structures/linkedlist');
const { TreeNode, Tree } = require('./data_structures/tree');
const Graph = require('./data_structures/graph'); // Fix the import
const { fibonacci } = require('./ds_algorithms/algorithms/dp_fibonacci');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Halo');
});
// Function to generate the Fibonacci sequence up to the given number
function generateFibonacciSequence(n) {
  const sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(fibonacci(i));
  }
  return sequence;
}

// Fibonacci API endpoint
app.get('/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
  }

  const result = fibonacci(n);
  const sequence = generateFibonacciSequence(n);

  res.json({ fibonacciNumber: result, fibonacciSequence: sequence });
});

// API endpoint for generating dummy data and wrapping it in a Stack
app.get('/dummy-stack', (req, res) => {
  const dummyList = generateDummyList(10); // Generate 10 dummy data
  const stack = new Stack();
  for (const item of dummyList) {
    stack.push(item);
  }

  res.json({ items: stack.toArray() });
});
// API endpoint for generating dummy data and wrapping it in a Queue
app.get('/dummy-queue', (req, res) => {
  const dummyList = generateDummyList(10); // Generate 10 dummy data
  const queue = new Queue();
  for (const item of dummyList) {
    queue.enqueue(item);
  }

  res.json({ items: queue.toArray() });
});
// API endpoint for generating dummy data and wrapping it in a BinaryTree
app.get('/dummy-binary-tree', (req, res) => {
  const dummyList = generateDummyList(10); // Generate 10 dummy data
  const binaryTree = new BinaryTree();

  for (const data of dummyList) {
    binaryTree.insert(data);
  }

  res.json(binaryTree);
});

// API endpoint for generating dummy data and wrapping it in a LinkedList
app.get('/dummy-linked-list', (req, res) => {
  const dummyList = generateDummyList(10); // Generate 10 dummy data
  const linkedList = new LinkedList();

  for (const data of dummyList) {
    linkedList.append(data);
  }

  res.json(linkedList);
});

// Function to recursively create child nodes with a random number of children and levels
function createRandomTree(node, levels) {
  if (levels === 0) {
    return; // Base case: reached maximum levels, stop creating children
  }

  // Generate a random number of children for the current node
  const numChildren = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
  for (let i = 0; i < numChildren; i++) {
    const dummyData = generateDummyList(1)[0]; // Generate one random dummy data
    const childNode = new TreeNode(dummyData);
    node.addChild(childNode);

    // Recursively create child nodes for the current child node with reduced levels
    createRandomTree(childNode, levels - 1);
  }
}

app.get('/dummy-tree', (req, res) => {
  const dummyList = generateDummyList(1); // Generate 1 root node dummy data
  const treeRoot = new TreeNode(dummyList[0]);

  // Generate a random number of levels for the tree
  const numLevels = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5

  // Recursively create child nodes with random levels and random children
  createRandomTree(treeRoot, numLevels);

  const tree = new Tree();
  tree.setRoot(treeRoot);

  res.json(tree);
});

app.get('/bfs', (req, res) => {
  const graph = generateGraphWithRandomVerticesAndEdges(); // Call the function to generate the graph
  const result = [];
  bfs(graph, Array.from(graph.vertices.keys())[0], (node) => {
    result.push(node);
  });
  res.json(result);
});

app.get('/dfs', (req, res) => {
  const graph = generateGraphWithRandomVerticesAndEdges(); // Call the function to generate the graph
  const result = [];
  dfs(graph, Array.from(graph.vertices.keys())[0], (node) => {
    result.push(node);
  });
  res.json(result);
});

// Function to generate a graph with random vertices and edges
function generateGraphWithRandomVerticesAndEdges() {
  const graph = new Graph();
  const dummyList = generateDummyList(5); // Generate 5 dummy vertices

  for (const vertex of dummyList) {
    graph.addVertex(vertex);
  }

  for (let i = 0; i < dummyList.length - 1; i++) {
    const fromVertex = dummyList[i];
    const toVertex = dummyList[i + 1];
    graph.addEdge(fromVertex, toVertex);
  }

  return graph;
}



// API endpoint for search by email functionality in the linked list
app.get('/search-by-email', (req, res) => {
  const emailToSearch = req.query.email;
  const linkedList = new LinkedList();
  const dummyList = generateDummyList(10); // Generate 10 dummy data
  dummyList.forEach(item => linkedList.append(item));

  const index = linkedList.searchByEmail(emailToSearch);
  if (index !== -1) {
    res.json({ email: emailToSearch, index, result: 'Found' });
  } else {
    res.json({ email: emailToSearch, index, result: 'Not found' });
  }
});

// API endpoint for random data generation in the linked list
app.get('/generate-random', (req, res) => {
  const linkedList = new LinkedList();
  for (let i = 0; i < 10; i++) {
    const randomData = Math.floor(Math.random() * 100); // Generating random number between 0 and 99
    const email = `user${i}@example.com`; // Replace with random email generation logic
    linkedList.append({ id: randomData, name: `User ${i}`, email });
  }
  res.json(linkedList.getAllData());
});


app.listen(port, () => {
  console.log(`API server berjalan pada http://localhost:${port}`);
});
