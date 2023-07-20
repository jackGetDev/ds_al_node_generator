// ds_algorithms/algorithms/dfs.js
function dfs(graph, startingVertex, visitCallback) {
  const stack = [startingVertex];
  const visited = new Set();

  while (stack.length > 0) {
    const currentVertex = stack.pop();
    if (!visited.has(currentVertex)) {
      visited.add(currentVertex);
      visitCallback(currentVertex);

      const neighbors = graph.vertices.get(currentVertex); // Access neighbors from the Map using .get() method
      for (const neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }
}

module.exports = dfs;
