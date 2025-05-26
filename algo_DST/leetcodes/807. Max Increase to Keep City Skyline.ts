/**
 * @param {number[][]} grid
 * @return {number}


 8 4 8 7
 7 4 7 7
 9 4 8 7
 3 3 3 3


 5 4 0 3: 12
 5 0 2 0: 7
 0 2 2 4: 8
 3 0 2 3: 8

12 15 8
20 15
35

8
7
9
3
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const maxes = [];
    const colLen = grid[0].length;
    for (let row = 0; row < grid.length; row++) {
        maxes[row] = Array(colLen).fill(Math.max(...grid[row]));
    }
    const rowLen = grid.length;
    let count = 0;
    for (let col = 0; col < colLen; col++) {
        let colMax = -Infinity;
        for (let row = 0; row < rowLen; row++) {
            colMax = Math.max(colMax, grid[row][col]);
        }
        for (let row = 0; row < rowLen; row++) {
            count += Math.min(colMax, maxes[row][col]) - grid[row][col];
        }
    }
    return count;
};
