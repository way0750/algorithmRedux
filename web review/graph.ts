
const binarySearchTreeInsert = (root, val) => {
    if (!root) return { val, left: null, right: null };

    if (val < root.val) {
        root.left = binarySearchTreeInsert(root.left, val);
    } else {
        root.right = binarySearchTreeInsert(root.right, val);
    }
    return root;
}

// path finding: depth first and breadth first
const depthFirstSearchGraph = (graph, targetVal) => {
    const visited = new Set();
    const search = (curNodeKey) => {
        if (curNodeKey === targetVal) {
            return true;
        }
        visited.add(curNodeKey);
        const edgeNodeKeys = graph.get(curNodeKey) || [];
        for (let nodeKey of edgeNodeKeys) {
            if (!visited.has(nodeKey) && search(nodeKey)) return true;
        }
        return false;
    };

    // in case of disconnected graph:
    const nodeKeys = [...graph.keys()];
    for (let nodeKey of nodeKeys) {
        if (!visited.has(nodeKey) && search(nodeKey)) return true;
    }

    return false;
}

// breadth first search graph
const breadthFirstSearchConnectedGraph = (graph, nodeKey, callBack) => {
    const queue = [nodeKey];
    const visited = new Set([nodeKey]);
    while (queue.length) {
        const nodeKey = queue.shift();
        callBack(graph.get(nodeKey));
        (graph.get(nodeKey) || []).forEach((nodeKey) => {
            if (!visited.has(nodeKey)) {
                visited.add(nodeKey);
                queue.push(nodeKey);
            }
        });
    }
}

const breadthFirstSearchDisconnectedGraph = (graph, callBack) => {
    const queue = [];
    const visited = new Set();
    graph.forEach((_, nodeKey) => {
        if (!visited.has(nodeKey)) {
            visited.add(nodeKey);
            queue.push(nodeKey);
            while(queue.length) {
                const nodeKey = queue.shift();
                const edges = graph.get(nodeKey);
                callBack(edges, nodeKey);
                edges.forEach((edge) => {
                    if (!visited.has(edge)) {
                        visited.add(edge);
                        queue.push(edge);
                    }
                });
            }
        }
    });
}

const breadthFirstSearchGraphLayerByLayer = (graph, nodeKey, callBack) => {
    let curLayer = [nodeKey];
    const visited = new Set();
    while (curLayer.length) {
        // process the entire layer by layer
        const nextLayer = [];
        curLayer.forEach((nodeKey) => {
            const edges = graph.get(nodeKey)
            callBack(edges, nodeKey);
            edges.forEach((nodeKey) => {
                if (!visited.has(nodeKey)) {
                    visited.add(nodeKey);
                    nextLayer.push(nodeKey);
                }
            });
        });
        curLayer = nextLayer
    }
}

const biDirectionalSearch = (graph, nodeKey1, nodeKey2) => {
    if (nodeKey1 === nodeKey2) return true;
    if (nodeKey1 === null || nodeKey2 === null) return false;
    if (!graph.has(nodeKey1) || !graph.has(nodeKey2)) return false;

    const q1 = [nodeKey1];
    const q2 = [nodeKey2];
    const visitedBy1 = new Set([nodeKey1]);
    const visitedBy2 = new Set([nodeKey2]);

    while (q1.length && q2.length) {
        const n1Key = q1.shift();
        const edges1 = graph.get(n1Key) || [];
        for (let nodeKey of edges1) {
            if (visitedBy2.has(nodeKey)) return true;
            if (!visitedBy1.has(nodeKey)) {
                visitedBy1.add(nodeKey);
                q1.push(nodeKey);
            }
        }

        const n2Key = q2.shift();
        const edges2 = graph.get(n2Key) || [];
        for (let nodeKey of edges2) {
            if (visitedBy1.has(nodeKey)) return true;
            if (!visitedBy2.has(nodeKey)) {
                visitedBy2.add(nodeKey);
                q2.push(nodeKey);
            }
        }
    }

    return false;
}

const topolocatialSort = (graph) => {
    const order = [];
    const visited = new Set();
    const visiting = new Set();

    const search = (nodeKey) => {
        if (visiting.has(nodeKey)) throw Error('cycle detected');
        if (visited.has(nodeKey)) return;
        visited.add(nodeKey);
        visiting.add(nodeKey);
        graph.get(nodeKey).forEach((edgeNodekey) => search(edgeNodekey));

        visiting.delete(nodeKey);
        order.unshift(nodeKey);
    }

    graph.forEach((_, nodeKey) => {
        search(nodeKey);
    });

    return order;
}
