/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 set all connected nodes of k to be in the same group
 then anytime a non associated node is connected to any part of that group
 short cut return all nodes
 else only return nodes that are not in the group
 */
 var remainingMethods = function(n, k, invocations) {
    const graph = Array(n).fill(null).map(() => []);
    for (let [from, to] of invocations) {
        graph[from].push(to);
    }
    const visited = new Set();
    const badNodes = new Set();
    const addBadNode = (node) => {
        if (visited.has(node)) return;
        visited.add(node);
        badNodes.add(node);
        for (let neighbor of graph[node]) {
            addBadNode(neighbor);
        }
    }
    addBadNode(k);
    const ans = [];
    const isConnectedToBadNodes = (node) => {
        if (badNodes.has(node)) return true;
        if (visited.has(node)) return false;
        visited.add(node);
        ans.push(node);
        return graph[node].some((neighbor) => {
            return isConnectedToBadNodes(neighbor);
        });
    }
    for (let node = 0; node < n; node++) {
        if (visited.has(node)) continue;
        if (isConnectedToBadNodes(node)) {
            return Array(n).fill(null).map((_, index) => index);
        }
    }
    return ans;
};