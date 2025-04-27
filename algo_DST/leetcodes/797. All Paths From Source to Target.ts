/**
 * @param {number[][]} graph
 * @return {number[][]}
 since n =15, it's small enough so use dfs

 base case
    val = n - 1 return [[]]
    or node has been visited, return the list of paths
 what to always return
    an array of paths, so an array of array(s)
 what to do with returns?
    add self vals to each sub paths(copy of)
 how to make progress / problem smaller:
    for each node, just go through each edges

time: O(n) assuming copying array is quick
space: O(n**2)
 */
var allPathsSourceTarget = function(graph) {
    const visited = Array(graph.length).fill(null);
    const dfs = (node) => {
        if (node === graph.length-1) return [[node]];
        if (visited[node]) return visited[node];
        const ans = [];
        for (let neighbor of graph[node]) {
            const subpaths = dfs(neighbor);
            for (let subpath of subpaths) {
                ans.push([node, ...subpath]);
            }
        }
        visited[node] = ans;
        return ans;
    }
    return dfs(0);
};