/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 it's about detecting cycle in a graph
 build graph
 go through it to see if there is a cycle

 time: O(prereq.length)
 space: O(same)
 */
 var canFinish = function(numCourses, prerequisites) {
    // const graph = {}; // { val: [] } 
    const graph = Array(numCourses).fill(0).map(() => []);
    for (let i = 0; i < prerequisites.length; i++) {
        const [node, neighbor] = prerequisites[i];
        graph[node].push(neighbor);
    }
    
    const searched = new Set();
    const dfs = (node, visited) => {
        // if current search path encounters the same node that's a cycle
        if (visited.has(node)) return false;
        if (searched.has(node)) return true; // already search by others, return true;
        visited.add(node);
        searched.add(node);
        const neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (dfs(neighbors[i], visited) === false) return false;
        }
        visited.delete(node);
        return true;
    }
    for (let node = 0; node < numCourses; node++) {
        if (searched.has(node)) continue;
        const visited = new Set();
        if (dfs(node, visited) === false) return false;
    }

    return true;
};