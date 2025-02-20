/**
 * You are given a 0-indexed integer matrix grid and an integer k.

Return the number of 
submatrices
 that contain the top-left element of the grid, and have a sum less than or equal to k.

 

Example 1:


Input: grid = [[7,6,3],[6,6,1]], k = 18
Output: 4
Explanation: There are only 4 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 18.
Example 2:


Input: grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
Output: 6
Explanation: There are only 6 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 20.
 

Constraints:

m == grid.length 
n == grid[i].length
1 <= n, m <= 1000 
0 <= grid[i][j] <= 1000
1 <= k <= 109


for matrix:
7,2,9
1,5,0
2,6,6


 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}

  7  9 18
  8 15 24
 10 23 38

top + left + self - (topLeft the overlapping matrix) = self sum

loop from top left to botton right
fill each cell with the running sum of the matrix (starts from top left and ends
at self)

keep looping from top row to bottom, left col to right
    whenever the sum is > k, it's done no need to keep going on that row

time and space:
    if reusing the input
    space: O(1)
    time: O(mn)

 */
    var countSubmatrices = function(grid, k) {
        let count = 0;
        for (let row = 0; row < grid.length; row++) {
            let col = 0;
            while (col < grid[0].length) {
                if (row > 0) {
                    grid[row][col] += grid[row-1][col];
                }
                if (col > 0) {
                    grid[row][col] += grid[row][col-1];
                }
                if (row > 0 && col > 0) {
                    grid[row][col] -= grid[row-1][col-1];
                }
    
                if (grid[row][col] <= k) {
                    count++;
                } else {
                    break;
                }
    
                col++;
            }
        }
        return count;
    };