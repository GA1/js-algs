const {Queue} = require('./queue')

function breadthFirstSearchShortestPath(graph, v1, v2) {
  const visited = new Set()
  const queue = new Queue()
  queue.enqueue({v: v1, dist: 0})
  while(!queue.isEmpty()) {
    const current = queue.dequeue()
    const neighbors = graph.getNeighbors(current.v)
    for (const n of neighbors) {
      if (!visited.has(n)) {
        if (n === v2) {
          return current.dist + 1
        } else {
          queue.enqueue({v: n, dist: current.dist + 1})
        }
      }
    }
    visited.add(current.v)
  }
  return -1
}

module.exports.breadthFirstSearchShortestPath = breadthFirstSearchShortestPath
