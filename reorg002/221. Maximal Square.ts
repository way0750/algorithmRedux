/**
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.

 */

function maximalSquare(matrix: string[][]): number {
    let curMax = 0;
    let dp = Array(matrix[0].length).fill(0);
    for (let row = 0; row < matrix.length; row++) {
        const newDp = [];
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === '1') {
                const top = dp[col];
                const left = newDp[col-1] || 0;
                const topLeft = dp[col-1] || 0;
                newDp.push(Math.min(top, left, topLeft) + 1);
                curMax = Math.max(curMax, newDp[col]);
            } else {
                newDp.push(0);
            }
        }
        dp = newDp;
    }
    return curMax * curMax;
};