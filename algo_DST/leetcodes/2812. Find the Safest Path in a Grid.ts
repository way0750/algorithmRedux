/**
 * Attempted but failed
 * You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:

A cell containing a thief if grid[r][c] = 1
An empty cell if grid[r][c] = 0
You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).

An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.

The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

 

Example 1:


Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 0
Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
Example 2:


Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.
Example 3:


Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
- The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.
 

Constraints:

1 <= grid.length == n <= 400
grid[i].length == n
grid[i][j] is either 0 or 1.
There is at least one thief in the grid.

 */

/**
 * @param {number[][]} grid
 * @return {number}
use a path consisted of cells that are as far from 1s as possible 
    then get the cell that's closest to a theive
set a new matrix where all cells are 0
    or reuse the input
go through matrix in 4 directions
    top to bottom
    left to right
    right to left
    bottom to top
    to do sweeps

    ex: from top to bottom
        if 0, then next cell should be 0
        if > 0, then next cell should be running sum
        if there already a number
            compare sum and number, keep the smallest one and set it as the sum
[4,3,2,1]
[3,4,3,2]
[2,3,4,3]
[1,2,3,4]




now move from 0,0 to n-1,n-1
always choose one with the largest score
    find path
    4 - 3 - 4 - 3 - 4 - 3 - 4
    the smallest number is 3
    3-1 = 2 that's the safetest score


[3,3,2,1]
[3,3,3,2]
[2,3,3,3]
[1,2,3,4]
go from bottom right to top left
for each pos
    get neighbor on right and bottom
        the max neighbor
        set min of self vs max neighbor
[3,2,1]
[4,3,2]
[5,4,3]


[3,2,1]
[3,3,2]
[3,3,3]

[1,2,3]
[2,3,2]
[3,2,1]

[1,1,1]
[1,1,1]
[1,1,1]
1-1 = 0



prev > 0
cell > 0

prev === 0
cell === 0

     prev prev
cell   0    1  
cell   1    0

cell === 0 just take prev 0 or not
cell === 1?
    prev === 1? compare and take the smallest
    prev === 0? keep cell

 */

    var maximumSafenessFactor = function(grid) {
        const rowLen = grid.length;
        const colLen = grid[0].length;
        // top to bottom:
        for (let row = 1; row < rowLen; row++) {
            for (let col = 0; col < colLen; col++) {
                let prev = grid[row-1][col];
                prev = prev > 0 ? prev + 1 : 0;
                const cell = grid[row][col];
                if (cell === 0) {
                    grid[row][col] = prev;
                } else {
                    grid[row][col] = prev > 0 ? Math.min(cell, prev) : cell;
                }
            }
        }
        // bottom to top:
        for (let row = rowLen-2; row > -1; row--) {
            for (let col = 0; col < colLen; col++) {
                let prev = grid[row+1][col];
                prev = prev > 0 ? prev + 1 : 0;
                const cell = grid[row][col];
                if (cell === 0) {
                    grid[row][col] = prev;
                } else {
                    grid[row][col] = prev > 0 ? Math.min(cell, prev) : cell;
                }
            }
        }
    
        // left to right;
        for (let col = 1; col < colLen; col++) {
            for (let row = 0; row < rowLen; row++) {
                let prev = grid[row][col-1];
                prev = prev > 0 ? prev + 1 : 0;
                const cell = grid[row][col];
                if (cell === 0) {
                    grid[row][col] = prev;
                } else {
                    grid[row][col] = prev > 0 ? Math.min(cell, prev) : cell;
                }
            }
        }
    
        // right to left;
        for (let col = colLen-2; col > -1; col--) {
            for (let row = 0; row < rowLen; row++) {
                let prev = grid[row][col+1];
                prev = prev > 0 ? prev + 1 : 0;
                const cell = grid[row][col];
                if (cell === 0) {
                    grid[row][col] = prev;
                } else {
                    grid[row][col] = prev > 0 ? Math.min(cell, prev) : cell;
                }
            }
        }
        // max neighbors top and left default to 0
        for (let row = 0; row < rowLen; row++) {
            for (let col = 0; col < colLen; col++) {
                const neightbors = [];
                if (row > 0) neightbors.push(grid[row-1][col]);
                if (col > 0) neightbors.push(grid[row][col-1]);
                if (neightbors.length) {
                    const cell = grid[row][col];
                    grid[row][col] = Math.min(cell, Math.max(...neightbors));
                }
            }
        }
    
        return grid[rowLen-1][colLen-1] - 1;
    };
