/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    for (let row of grid) {
        if (row[0] === 0) {
            for (let col = 0; col < row.length; col++) {
                row[col] = +(!row[col]);
            }
        }
    }
    for (let col = 0; col < grid[0].length; col++) {
        let count = 0;
        for (let row = 0; row < grid.length; row++) {
            grid[row][col] && count++
        }
        if (count < grid.length/2) {
            for (let row = 0; row < grid.length; row++) {
                grid[row][col] = +(!grid[row][col]);
            }
        }
    }
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        count += Number.parseInt(grid[row].join(''), 2);
    }
    return count;
};
