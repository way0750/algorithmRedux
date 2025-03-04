/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 -3 1 4 -2

 2--1
 |
 3--4

need to main the order, and can do so by just find one of the heads
    by checking neighbors count === 1
    and then start searching from there and on

time: O(pairs.length)
space: O(pairs.length)
 */
var restoreArray = function(adjacentPairs) {
    const graph = {} // { num: [] }
    for (let i = 0; i < adjacentPairs.length; i++) {
        const [u, v] = adjacentPairs[i];
        graph[u] = graph[u] || [];
        graph[u].push(v);
        graph[v] = graph[v] || [];
        graph[v].push(u);
    }
    let head = null;
    for (let node in graph) {
        if (graph[node].length === 1) head = node;
    }

    const visited = new Set();
    const ans = []
    /**
    base case:
        node has been visited, do nothing just return
    what to do with return?
        nothing
    what to always return?
        nothing
    
     */
    const dfs = (node) => {
        node = +node;
        if (visited.has(node)) return;
        visited.add(node);
        const [neighbor1, neighbor2] = graph[node];
        dfs(neighbor1);
        neighbor2 !== undefined && dfs(neighbor2);
        ans.push(node);
    }
    dfs(head);
    return ans;
};