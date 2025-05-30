/**
 * @param {number[][]} grid
 * @return {number[][]}

col:    -1 -1 3
row: 1
     1
     -1


col:    -1 -1 3
row: 1  0  0 4
     1  0  0 4
    -1 -2 -2 2
cols: 2 2 2
rows:
    3
    3

 */
var onesMinusZeros = function(grid) {
    const rows = Array(grid.length).fill(0);
    const cols = Array(grid[0].length).fill(0);
    const vals = [-1, 1];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const val = vals[grid[row][col]];
            rows[row] += val;
            cols[col] += val;
        }
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            grid[row][col] = rows[row] + cols[col];
        }
    }
    return grid;
};
