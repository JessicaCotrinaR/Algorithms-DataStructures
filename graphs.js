//    A ---- D
// B --- E  --- F
// {
//    A:[],
//    B:[],
//    C:[],
//    F:[],
// }
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertext(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    //filter does return everuthing that is not equal to v2
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    //delete is for objects and delete key and value
  }
  depthFirstRecursive(start) {
    //start is vertex to start
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    // start();
  }
  depthFirstInterative(start) {
    const stack = [start];
    const result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
      return result;
    }
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

g = new Graph();
g.addVertext("A");
g.addVertext("B");
g.addVertext("C");
console.log(g);
g.addEdge("A", "B");
g.addEdge("A", "C");
console.log(g);
// g.removeVertex("B");
// console.log(g);
g.depthFirstRecursive();
