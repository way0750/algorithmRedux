/**
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

Example 1:


Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
 */

function generateMatrix(n: number): number[][] {
    const matrix = Array(n).fill(1).map(() => Array(n));
    let top = 0, right = n-1, bottom = n-1, left = 0;
    let num = 1;
    while (num <= n*n) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num++;
        }
        top++;
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        right--;
        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = num++;
        }
        bottom--;
        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = num++;
        }
        left++;
    }
    return matrix;
};

