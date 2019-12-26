const {NonDirectedGraph} = require('./non-directed-graph')

describe('Non directed graph', () => {
  it('0 to 1', () => {
    const graph = new NonDirectedGraph([[0, 1], [0, 2]])
    const neighbors = graph.getNeighbors(0);
    expect(neighbors.size).toEqual(2);
    expect(neighbors.has(1)).toEqual(true);
    expect(neighbors.has(2)).toEqual(true);
  });
})
