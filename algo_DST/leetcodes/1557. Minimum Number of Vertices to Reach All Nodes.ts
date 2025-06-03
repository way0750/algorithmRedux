var findSmallestSetOfVertices = function(n, edges) {
    const bad = new Set();
    for (let [from, to] of edges) bad.add(to);
    const ans = [];
    for (let node = 0; node < n; node++) {
        if (!bad.has(node)) ans.push(node);
    }
    return ans;
};