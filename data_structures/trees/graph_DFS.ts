/**
 * depth first search on graph
 * 
 * if using recursion:
 * base case: node has been visited
 * how to make problem smaller: go through each edges, if there isn't any
 *   that's essentially another base case
 * what to do with return: nothing
 * what to always return: nothing
 * 
 * 
 * shape of graph: {
 *   num: {[edges], visited}
 * 
 * }
 */


export function DFS(graph, node, callBack) {
  if (graph[node].visited) {
    return;
  }

  graph[node].visited = true;
  graph[node].edges.forEach((v) => {
    DFS(graph, v, callBack);
  });
}

