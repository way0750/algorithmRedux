/**
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
 */



var networkDelayTime001 = function(times, n, k) {
    // {from : [[to, weight]], [to, weight]};
    const graph = Array(n+1).fill(1).map(() => []);

    times.forEach(([from, to, weight]) => {
        graph[from].push([to, weight]);
    });

    const distRecord = Array(n+1).fill(Infinity);
    const queue = [[k, 0]]; // [[node, accumulative weight]]
    while (queue.length) {
        queue.sort((a, b) => a[1] - b[1]);
        const [currentNode, totalWeight] = queue.shift();
        if (totalWeight < distRecord[currentNode]) {
            distRecord[currentNode] = totalWeight;
            const neighbors = graph[currentNode] || [];
            neighbors.forEach((neighbor) => {
                queue.push([neighbor[0], neighbor[1] + totalWeight]);
            });
        }
    }
    distRecord.shift() // get rid of the first Infinity
    let max = -1;
    for (let i = 0; i < distRecord.length; i++) {
        if (distRecord[i] === Infinity) return -1;
        max = Math.max(max, distRecord[i]);
    }

    return max;
};
/**

graph: [
    0: []
    1: [[2, 1], [3, 1]]
    2: [[3, 2]]
    3: []
    distRecord: [
        0: Infinity
        1: Infinity
        2: 0
        3: Infinity
    ]

    q [[2, 0]]
]

 */