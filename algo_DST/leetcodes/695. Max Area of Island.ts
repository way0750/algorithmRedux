/**
 * @param {number[][]} grid
 * @return {number}
 go through each cell
    if cell value is 1, do search to explore the entire island
        mark the cells of the same island with 2s
        update global size if needed
return size
time: O(mXn)
space: O(1) for reusing the grid
 */
var maxAreaOfIsland = function(grid) {
    /**
    base case:
        cell is out of bound
        cell is 0 or 2 (we will mark visited cells with 2s)
        in all these cases: return 0;
    what to always return:
        an integer, it's the size of sub dfs search part of the same island
    what to do with returns:
        add them up and + 1 (current cell)
    how to make problems smaller:
        just dfs search
            top, left, right, bottom
     */
    const width = grid[0].length;
    const height = grid.length;

    const dfs = (row, col) => {
        // base case:
        // check out if of bound first
        const outOfBound = row < 0 || row >= height || col < 0 || col >= width;
        if (outOfBound || grid[row][col] !== 1) return 0;
        grid[row][col] = 2;

        // get sub island size and add current cell to the size
        return 1 +
            dfs(row-1, col) +
            dfs(row+1, col) +
            dfs(row, col-1) +
            dfs(row, col+1);
    };

    let size = 0;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            // do search here
            if (grid[row][col] === 1) {
                size = Math.max(size, dfs(row, col));
            }
        }
    }
    return size;
};