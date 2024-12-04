/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.

when comes to doing this kinda graph search,
    need to have both graph level and path level isVisted record
    graph level isVisited record is to avoid visiting the same node, and then use the pre processed results
    path level isVisted record to tell if there is a cycle
 */


function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const isVistedGraph = new Set();
    const graph = {};
    for (let i = 0; i < prerequisites.length; i++) {
        const prer = prerequisites[i];
        graph[prer[0]] = graph[prer[0]] || [];
        graph[prer[0]].push(prer[1]);
    }

    const search = (node, isVistedPath = new Set()) => {
        if (isVistedPath.has(node)) return false;
        if (isVistedGraph.has(node)) return true;
        if (!(node in graph)) return true;
        isVistedPath.add(node);
        isVistedGraph.add(node);
        const ans = graph[node].every((edge) => search(edge, isVistedPath));
        isVistedPath.delete(node);
        return ans;
    }

    for (let node = 0; node < numCourses; node++) {
        if (!search(node)) return false;  
    }

    return true;
};
