/**
 * @param {number[][]} isConnected
 * @return {number}
[1,1,0]
[1,1,0]
[0,0,1]

[1,1,0]
[1,1,0]
[0,0,1]

go through each city (0 ... matrix.length)
    if city hasn't been visited
        mark it as visited
        then from there do a dfs/bfs search to mark all the connect cities
    provinces++
return pronvinces
time: O(matrix.length)
space: O(1 if marking up the input matrix)
 */
var findCircleNum = function(matrix) {
    // visited === -1
    const dfs = (cityId) => {
        /**
        base case:
            city has been visited: cell val === -1;
        what to always return:
            nothing, just mark things up
        what to do with returns:
            nothing
        how to make problem smaller:
            get the matrix[cityId] row
            then go through each cell
                if cell val === 1 pass that col to dfs
         */
        // current city is at matrix[cityId][cityId]
        if (matrix[cityId][cityId] === -1) return;
        matrix[cityId][cityId] = -1;
        for (let neighbor = 0; neighbor < matrix[cityId].length; neighbor++) {
            if (matrix[cityId][neighbor] === 1) dfs(neighbor);
        }
    }
    const len = matrix.length;
    let count = 0;
    for (let row = 0; row < len; row++) {
        // current city is at matrix[row][row]
        if (matrix[row][row] !== -1) {
            count++;
            dfs(row);
        }
    }
    return count;
};