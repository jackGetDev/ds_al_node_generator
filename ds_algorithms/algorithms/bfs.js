// ds_algorithms/algorithms/bfs.js
function bfs(graph, startingVertex, visitCallback) {
  const queue = [startingVertex];
  const visited = new Set();

  while (queue.length > 0) {
    const currentVertex = queue.shift();
    if (!visited.has(currentVertex)) {
      visited.add(currentVertex);
      visitCallback(currentVertex);

      const neighbors = graph.vertices.get(currentVertex); // Access neighbors from the Map using .get() method
      for (const neighbor of neighbors) {
        queue.push(neighbor);
      }
    }
  }
}

module.exports = bfs;
