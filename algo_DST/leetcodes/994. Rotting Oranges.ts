/**
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:


Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.

 */
/**
 * @param {number[][]} grid
 * @return {number}
 find a rotten one and expand
 keep track of layers and keep the max
 then at the end go through the matrix again to see if there
    is/are fresh ones

    time: O(mn)
    space: O(1)
 0 = empty
 1 = fresh
 2 = rotten
 3 = rotten and visited

[2,1,1],
[1,1,0],
[0,1,1]

[0,1,2],
[1,2,0],
[0,3,1]

get all the rotten ones and do a multi bfs at the same time?
 */
var orangesRotting = function(grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    let layer = [];
    let goodCount = 0;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === 2) {
                grid[row][col] = 3;
                layer.push([row, col]);
            } else if (grid[row][col] === 1) {
                goodCount++;
            }
        }
    }
    const inBound = (row, col) => {
        return row > -1 && row < rowLen && col > -1 && col < colLen;
    }
    let max = 0;
    const offsets = [[1,0],[-1,0],[0,1],[0,-1]];
    while (layer.length) {
        const newLayer = [];
        // get new pos
        // mark new pos as searched before putting them in the newLayer
        for (let i = 0; i < layer.length; i++) {
            const [row, col] = layer[i];
            for (let j = 0; j < offsets.length; j++) {
                const [rowOffset, colOffset] = offsets[j];
                const newRow = row + rowOffset;
                const newCol = col + colOffset;
                if (inBound(newRow, newCol) && grid[newRow][newCol] === 1) {
                    newLayer.push([newRow, newCol]);
                    grid[newRow][newCol] = 3;
                    goodCount--
                }
            }
        }
        layer = newLayer;
        layer.length && max++;
    }
    return goodCount ? -1 : max;
};