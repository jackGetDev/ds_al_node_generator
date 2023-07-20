// ds_algorithms/index.js
const Graph = require('../data_structures/graph');
const bfs = require('./algorithms/bfs');
const dfs = require('./algorithms/dfs');
const Stack = require('../data_structures/stack'); // Update the path for Stack
const Queue = require('../data_structures/queue'); // Update the path for Queue
const LinkedList = require('../data_structures/linkedlist');
const Tree = require('../data_structures/tree');
const fibonacci = require('./algorithms/dp_fibonacci'); // Add dynamic programming

module.exports = { Graph, bfs, dfs, Stack, Queue, LinkedList, Tree, fibonacci };
