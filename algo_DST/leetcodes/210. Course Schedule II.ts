/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}

3 -> 1 -> 0
V         ^
2 ---------

always search all neighbors before adding self
time: O(n)
space: O(n)
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = Array(numCourses).fill(0).map(() => []);
    for (let [from, to] of prerequisites) {
        graph[from].push(to);
    }
    const ans = [];
    const searched = new Set();
    const dfs = (node, pathVisited) => {
        if (pathVisited.has(node)) return false;
        if (searched.has(node)) return true;
        pathVisited.add(node);
        searched.add(node);
        for (let neighbor of graph[node]) {
            if (dfs(neighbor, pathVisited) === false) return false;
        }
        ans.push(node);
        pathVisited.delete(node);
        return true;
    }

    for (let node in graph) {
        const pathVisited = new Set();
        if (dfs(+node, pathVisited) === false) return [];
    }
    return ans;
};