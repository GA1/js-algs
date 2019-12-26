const {breadthFirstSearchShortestPath} = require('./breadth-first-search-shortest-path')
const {NonDirectedGraph} = require('./non-directed-graph')

describe('depth first search', () => {
  it('1 edge', () => {
    const graph = new NonDirectedGraph([[5, 7]])
    expect(breadthFirstSearchShortestPath(graph, 5, 7)).toBe(1);
    expect(breadthFirstSearchShortestPath(graph, 7, 5)).toBe(1);
    expect(breadthFirstSearchShortestPath(graph, 5, 11)).toBe(-1);
  });

  it('2 edges', () => {
    const graph = new NonDirectedGraph([[5, 7], [7, 11]])
    expect(breadthFirstSearchShortestPath(graph, 5, 11)).toBe(2);
    expect(breadthFirstSearchShortestPath(graph, 11, 5)).toBe(2);
    expect(breadthFirstSearchShortestPath(graph, 5, 13)).toBe(-1);
  })

  it('3 edges', () => {
    const graph = new NonDirectedGraph([[5, 7], [7, 11], [5, 11]])
    expect(breadthFirstSearchShortestPath(graph, 5, 11)).toBe(1);
    expect(breadthFirstSearchShortestPath(graph, 11, 5)).toBe(1);
    expect(breadthFirstSearchShortestPath(graph, 5, 13)).toBe(-1);
  })

  it('5 edges', () => {
    const graph = new NonDirectedGraph([[2, 5], [5, 7], [7, 11], [2, 13], [13, 11]])
    expect(breadthFirstSearchShortestPath(graph, 2, 11)).toBe(2);
    expect(breadthFirstSearchShortestPath(graph, 11, 2)).toBe(2);
  })
})
