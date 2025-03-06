/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 make graph:
 {
    n: {1, 2, 3}...
 }

 then for each class, to avoid searching too much
    just have a record to all classes that it is a prereq
    or dynamically search, if it is needed, then search
time: O(prereq.length + queries.length + numCourse)
space: O(numCourse + queries.legnth)
 */
const makeGraph = (numCourses, pres) => {
    const graph = Array(numCourses).fill(0).map(() => { return {} }); // [{ 0: true, 2: true }]
    for (let [from, to] of pres) {
        graph[from][to] = true;
    }
    return graph;
}
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const graph = makeGraph(numCourses, prerequisites);
    const visited = new Set();
    const dfs = (fromNode) => {
        if (visited.has(fromNode)) return graph[fromNode];
        visited.add(fromNode);
        for (let toNode in graph[fromNode]) {
            graph[fromNode] = {...graph[fromNode], ...dfs(+toNode)};
        }
        return graph[fromNode];
    }

    return queries.map(([fromNode, toNode]) => {
        dfs(fromNode);
        return !!graph[fromNode][toNode]
    });
};