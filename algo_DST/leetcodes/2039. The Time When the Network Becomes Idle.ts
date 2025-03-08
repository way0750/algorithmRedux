/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}

patience / round trip = amount of messages will be sent
2 to 0, round trip = 4
2's patience is 1
4 / 1 = 4 messages will be sent
time between 1st and last is 4 * patience = 4
the last message will be sent and back in round trip amount of time = 4
4 + 4 = 8
first message will be sent and come back in round trip amount of time
    and each subseuqent message will be patience amount of time later after each other
    4 + (4-3) = 7
    so network will be idle at 8
    roundTripTime + (message count  - 1) * patience
    2 + (1 - 1) * 1
    2 + 0 * 1
    2, 2 + 1, net work will be idle at 3


make graph and get each data node's distance from server
    this will give us the round trip time
message count:
    each node will spend this amount of meg:
        roundTripTime / patience
with message count: get each node's total time on messaging:
    roundTripTime + (message count - 1) * patience

update the global max when needed


distances:
1: 1, round trip: 2
    message count: 2 / 10, just ceil!!! it to 1
    2 + (1 - 1) * 10
    2 + 0
    2
2: 1, round trip: 2
    message count: 2 / 10, ceil it to 1
    same as above
    2

global max is 2
2 + 1, network is idle at 3

also need to get the fastest route for each node!
 */
var networkBecomesIdle = function(edges, patience) {
    // make graph: make it bi-directional just in case it helps to get to some nodes faster
    const graph = Array(patience.length).fill(0).map(() => []);
    for (let [from, to] of edges) {
        graph[from].push(to);
        graph[to].push(from);
    }

    // get all nodes' roundtrip to node 0
    let dist = 0;
    const tripDist = Array(patience.length).fill(Infinity);
    tripDist[0] = dist // both distance to self and as visited
    // do breadth first search here to access all nodes
    let curLevel = [0];
    while (curLevel.length) {
        const nextLevel = [];
        dist += 2; // for next level
        for (let node of curLevel) {
            for (let neighbor of graph[node]) {
                if (tripDist[neighbor] === Infinity) {
                    tripDist[neighbor] = dist;
                    nextLevel.push(neighbor);
                }
            }
        }
        curLevel = nextLevel;
    }

    let maxTime = -Infinity;
    for (let node = 1; node < patience.length; node++ ) {
        const roundTripTime = tripDist[node];
        const messageCount = Math.ceil(roundTripTime / patience[node]);
        const totalTime = roundTripTime + (messageCount - 1) * patience[node];
        maxTime = Math.max(maxTime, totalTime);
    }
    return maxTime + 1;
};

var networkBecomesIdle001 = function(edges, patience) {
    // make graph:
    const graph = Array(patience.length).fill(0).map(() => []);
    for (let [from, to] of edges) {
        graph[from].push(to);
    }

    // get all nodes' roundtrip to node 0
    let dist = 0;
    const tripDist = Array(patience.length).fill(Infinity);
    tripDist[0] = dist // both distance to self and as visited
    // do breadth first search here to access all nodes
    let curLevel = [0];
    while (curLevel.length) {
        const nextLevel = [];
        dist += 2; // for next level
        for (let node of curLevel) {
            for (let neighbor of graph[node]) {
                if (tripDist[neighbor] === Infinity) {
                    tripDist[neighbor] = dist;
                    nextLevel.push(neighbor);
                }
            }
        }
        curLevel = nextLevel;
    }

    let maxTime = -Infinity;
    for (let node = 1; node < patience.length; node++ ) {
        const roundTripTime = tripDist[node];
        const messageCount = Math.ceil(roundTripTime / patience[node]);
        const totalTime = roundTripTime + (messageCount - 1) * patience[node];
        maxTime = Math.max(maxTime, totalTime);
    }
    return maxTime + 1;
};