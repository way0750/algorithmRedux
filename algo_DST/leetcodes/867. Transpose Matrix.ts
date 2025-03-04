/**
 * Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}


1 2 3
4 5 6
7 8 9


1 4 7
2 5 8
3 6 9

2   4  -1
-10 5  11
18  -7  6

2   -10  18
4    5  -7
-1  11  6



reverse
3 2 1
6 5 4
9 8 7

then flip downward diag
3 6 9
2 5 8
1 4 7

1 2 3
4 5 6

1 4
2 5
3 6


 */
var transpose = function(matrix) {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    const ans = Array(colLen).fill(0).map(() => Array(rowLen));
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            ans[col][row] = matrix[row][col];
        }
    }
    return ans;
};