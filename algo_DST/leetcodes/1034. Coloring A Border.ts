/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 basically any cell that touches a different color cell or the grid border should change the color to color
 can use both dfs and bfs
 dfs is easier to write and understand though but has the problem of potential stack overflow
since both m and n are less than 50
do dfs
base cace:
    if out of bound
    or if cell is different color than starting color
    return true to change color of previous stack's cell
what to always return:
    boolean, to tell that if there is a adj cell with different color or grid border next to current cell
what to do with return:
    if true: change cell color to target color
    then return false
how to make progress:
    juse recursively call function with +1 -1 +1 -1

time: O(m X n)
space: O(m X n)
 */
var colorBorder = function(grid, row, col, color) {
    const srcColor = grid[row][col];
    const rowLen = grid.length;
    const colLen = grid[0].length;
    const visited = new Set();
    const dfs = (row, col) => {
        if (row < 0 || row === rowLen || col < 0 || col === colLen) {
            return true;
        } else if (visited.has(`${row}:${col}`)) {
            return false;
        } else if (grid[row][col] !== srcColor) {
            return true;
        }
        visited.add(`${row}:${col}`);
        if (dfs(row+1, col)) grid[row][col] = color;
        if (dfs(row-1, col)) grid[row][col] = color;
        if (dfs(row, col+1)) grid[row][col] = color;
        if (dfs(row, col-1)) grid[row][col] = color;
        return false;
    }
    dfs(row, col);
    return grid;
};