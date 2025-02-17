/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
 */

function minPathSum(grid: number[][]): number {
    const cols = grid[0].length;
    const rows = grid.length;
    for (let row = 1; row < rows; row++) grid[row][0] += grid[row-1][0]
    for (let col = 1; col < cols; col++) grid[0][col] += grid[0][col-1]
    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            grid[row][col] = Math.min(
                grid[row][col] + grid[row-1][col],
                grid[row][col] + grid[row][col-1],
            )
        }
    }
    return grid[rows-1][cols-1]
};