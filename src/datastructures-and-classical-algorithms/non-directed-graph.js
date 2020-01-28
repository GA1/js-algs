
class NonDirectedGraph {
  constructor(input) {
    const edges = new Map()
    input.forEach(e => {
      const [v1, v2] = e
      if (!edges.has(v1)) {
        const neighbors = new Set();
        edges.set(v1, neighbors)
      }
      if (!edges.has(v2)) {
        const neighbors = new Set();
        edges.set(v2, neighbors)
      }
      edges.get(v1).add(v2)
      edges.get(v2).add(v1)
    })
    this.edges = edges
  }

  getNeighbors(v) {
    return this.edges.get(v)
  }
}

module.exports.NonDirectedGraph = NonDirectedGraph

