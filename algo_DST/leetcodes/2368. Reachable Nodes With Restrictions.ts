/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 make a graph of {
    0: [1,2,4,5,6]
 }
 do a dfs:
 base case:
    if restrictive or visited: return 0
 what to always return:
    an int, the amount of nodes visitale
 what to do with returns:
    return it + 1
 how to make progress:
    just go through each edges
time: O(n)
space: O(n)
 */
var reachableNodes = function(n, edges, restricted) {
    const graph = Array(n).fill(null).map(() => []);
    for (let [from, to] of edges) {
        graph[from].push(to);
        graph[to].push(from);
    }
    const visited = new Set(restricted);
    const dfs = (node) => {
        if (visited.has(node)) return 0;
        visited.add(node);
        let sum = 0;
        for (let neighbor of graph[node]) {
            sum += dfs(neighbor);
        }
        return sum + 1;
    }
    return dfs(0);
};