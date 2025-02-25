/**
 * You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 

Example 1:


Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
Example 2:


Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid[i][j] is either 0 or 1.

 */
/**
 * @param {number[][]} grid
 * @return {number}
 basically any 1s connected to an boundary 1 cell would be accessible
    any other 1s are not, count those individual cells
do a either depth or breadth first search on 1s on the outter edge and
    mark all the connected 1s to 0
then do a search on inner part of the matrix to count 1 cells
time: O(mn)
space: O(mn)
 */
// depth first search
var numEnclaves = function(grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    const dfs = (row, col) => {
        const outBound = row < 0 || row >= rowLen || col < 0 || col >= colLen;
        if (outBound || grid[row][col] === 0) return;
        grid[row][col] = 0; // both marking val and setting "isVisited"
        dfs(row+1, col);
        dfs(row-1, col);
        dfs(row, col+1);
        dfs(row, col-1);
    }

    // the trick is mark the position as visited as soong as it's added
    // to the queue
    const dirOffsets = [[+1, 0], [-1, 0], [0, +1], [0, -1]];
    const bfs = (row, col) => {
        if (grid[row][col] === 0) return;
        const queue = [[row, col]];
        grid[row][col] = 0;
        while(queue.length) {
            const [row, col] = queue.shift();
            for (let [rowOffset, colOffset] of dirOffsets) {
                const newRow = row + rowOffset;
                const newCol = col + colOffset;
                
                const inBound = newRow >= 0 && newRow < rowLen && newCol >= 0 && newCol < colLen;
                if (inBound && grid[newRow][newCol] === 1) {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = 0;
                }
            }
        }
    }
    const topBottom = [0, rowLen-1];
    for (let i = 0; i < topBottom.length; i++) {
        const row = topBottom[i];
        for (let col = 0; col < colLen; col++) {
            // dfs(row, col);
            bfs(row, col)
        }
    }
    const leftRight = [0, colLen-1];
    for (let i = 0; i < leftRight.length; i++) {
        const col = leftRight[i];
        for (let row = 0; row < rowLen; row++) {
            // dfs(row, col);
            bfs(row, col);
        }
    }
    let count = 0;
    for (let row = 1; row < rowLen-1; row++) {
        for (let col = 1; col < colLen-1; col++) {
            if (grid[row][col] === 1) count++;
        }
    }
    return count;
};