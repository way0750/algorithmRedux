/**
 * There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

 

Example 1:


Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
Example 2:


Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
Example 3:


Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 

Constraints:

1 <= n <= 100
0 <= flights.length <= (n * (n - 1) / 2)
flights[i].length == 3
0 <= fromi, toi < n
fromi != toi
1 <= pricei <= 104
There will not be any multiple flights between two cities.
0 <= src, dst, k < n
src != dst

 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 what if you get the cheapest but > k
 so you need to keep track of both accmulative price and accmulative k
 k just needs to be in bound
 price needs to be cheapest within k
 */

 var findCheapestPrice001 = function(n, flights, src, dst, k) {
    const graph = Array(n).fill(1).map(() => []);
    for (let i = 0; i < flights.length; i++) {
        const [from, to, price] = flights[i];
        graph[from].push([to, price]);
    }
    const distRecord = Array(n).fill(Infinity);
    const queue = [[src, 0, 0]];
    while (queue.length) {
        queue.sort((a, b) => a[1] - b[1]);
        const [currentNode, totalPrice, totalK] = queue.shift();
        if (totalPrice < distRecord[currentNode] && totalK <= k+1) {
            distRecord[currentNode] = totalPrice;
            const neighbors = graph[currentNode];
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i];
                queue.push([
                    neighbor[0],
                    neighbor[1] + totalPrice,
                    totalK + 1
                ]);
            }
        }
    }
    return distRecord[dst] === Infinity ? -1 : distRecord[dst];
};

var findCheapestPrice = function(n, flights, src, dst, k) {
    const graph = Array(n).fill().map(() => []);
    for (const [from, to, price] of flights) {
        graph[from].push([to, price]);
    }
    
    const distances = Array(n).fill(Infinity);
    distances[src] = 0;
    
    const queue = [[src, 0]];
    let stops = 0;
    
    while (queue.length && stops <= k) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [node, cost] = queue.shift();
            
            for (const [neighbor, price] of graph[node]) {
                if (cost + price < distances[neighbor]) {
                    distances[neighbor] = cost + price;
                    queue.push([neighbor, cost + price]);
                }
            }
        }
        stops++;
    }
    
    return distances[dst] === Infinity ? -1 : distances[dst];
};
