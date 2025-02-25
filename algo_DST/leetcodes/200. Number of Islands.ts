/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

var numIslands001 = function(grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    const visited = new Set();
    let count = 0;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === '0' || visited.has(`${row}:${col}`)) continue;

            count++;
            const offsets = [[+1, 0], [-1, 0], [0, +1], [0, -1]];
            const queue = [[row, col]];
            visited.add(`${row}:${col}`);
            while(queue.length) {
                const [row, col] = queue.shift();
                offsets.forEach(([r, c]) => {
                    const newRow = row + r;
                    const newCol = col + c;
                    const inBound = 0 <= newRow && newRow < rowLen && 0 <= newCol && newCol < colLen;
                    const notVisited = !visited.has(`${newRow}:${newCol}`);
                    if (inBound && notVisited && grid[newRow][newCol] === '1') {
                        queue.push([newRow, newCol]);
                        visited.add(`${newRow}:${newCol}`);
                    }
                });
            }
        }
    }    
    return count;
};


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set();
    let count = 0;
    const rowLen = grid.length;
    const colLen = grid[0].length;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (visited.has(`${row}:${col}`) || grid[row][col] === '0') continue;
            count++;
            // expand and mark all the 1s
            dfb(row, col);
        }
    }
    function dfb(row, col) {
        const outBound = row < 0 || row >= rowLen || col < 0 || col >= colLen;
        const isVisited = visited.has(`${row}:${col}`);
        if (outBound || isVisited || grid[row][col] === '0') {
            return // no need to do anything because we are just marking things no saving the reutrn val
        }
        visited.add(`${row}:${col}`);
        dfb(row+1, col);
        dfb(row-1, col);
        dfb(row, col+1);
        dfb(row, col-1);
    }
    return count
};

/**
["1","1","0","0","0"]
["1","1","0","0","0"]
["0","0","1","0","0"]
["0","0","0","1","1"]

 */