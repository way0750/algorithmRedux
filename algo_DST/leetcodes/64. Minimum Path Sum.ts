/**
 * @param {number[][]} grid
 * @return {number}


 1 4 5
 2 7 6
 6 8 7


 */
 var minPathSum = function(grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    for (let col = 1; col < colLen; col++) {
        grid[0][col] += grid[0][col-1];
    }
    for (let row = 1; row < rowLen; row++) {
        grid[row][0] += grid[row-1][0];
    }
    for (let row = 1; row < rowLen; row++) {
        for (let col = 1; col < colLen; col++) {
            grid[row][col] += Math.min(grid[row-1][col], grid[row][col-1])
        }
    }

    return grid[rowLen-1][colLen-1];
};