/**
 * You are given a positive integer n, indicating that we initially have an n x n 0-indexed integer matrix mat filled with zeroes.

You are also given a 2D integer array query. For each query[i] = [row1i, col1i, row2i, col2i], you should do the following operation:

Add 1 to every element in the submatrix with the top left corner (row1i, col1i) and the bottom right corner (row2i, col2i). That is, add 1 to mat[x][y] for all row1i <= x <= row2i and col1i <= y <= col2i.
Return the matrix mat after performing every query.

 

Example 1:


Input: n = 3, queries = [[1,1,2,2],[0,0,1,1]]
Output: [[1,1,0],[1,2,1],[0,1,1]]
Explanation: The diagram above shows the initial matrix, the matrix after the first query, and the matrix after the second query.
- In the first query, we add 1 to every element in the submatrix with the top left corner (1, 1) and bottom right corner (2, 2).
- In the second query, we add 1 to every element in the submatrix with the top left corner (0, 0) and bottom right corner (1, 1).
Example 2:


Input: n = 2, queries = [[0,0,1,1]]
Output: [[1,1],[1,1]]
Explanation: The diagram above shows the initial matrix and the matrix after the first query.
- In the first query we add 1 to every element in the matrix.
 

Constraints:

1 <= n <= 500
1 <= queries.length <= 104
0 <= row1i <= row2i < n
0 <= col1i <= col2i < n
 */

// naive:
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
just init a matrix of n X n and fill it will 0s
then go through each query and fill the cells with 1
time O(nxn for matrix, and then all the query: m X n x n)
space: O(nxn)
 */
const fillMatrix = (matrix, query) => {
    const [r1, c1, r2, c2] = query;
    for (let row = r1; row <= r2; row++) {
        for (let col = c1; col <= c2; col++) {
            matrix[row][col]++;
        }
    }
};

var rangeAddQueriesMySolution = function(n, queries) {
    const matrix = Array(n).fill(0).map(() => Array(n).fill(0))
    for(let i = 0; i < queries.length; i++) {
        // fill matrix here
        fillMatrix(matrix, queries[i]);
    }
    return matrix;
};

// others solution coded out by me after understanding it:
/**
 * the main idea is that: you don't have to loop through all cell for all the sub matrixes
 * you can just mark boundaries of each sub matrixes and then do "line sweep"
 * for "line sweep" look at the pictures in this same folder.
 * or:
 * [1,0,0,0,-1,0,0]
 * if you do a running sum from left to right
 * it will become:
 * [1,1,1,1,0,0,0] even thought each cell is a total sum of previous
 * nums, it is more like it is just copying the prevous num onto itself
 * 
 * 1 was the number for all cells to copy
 * and -1 was the boundry and to "stop" the copying
 * 
 * if there are over laps:
 * aaaaaaaaaaaaaaaaaaa
 *          bbbbbbbbbbbbbbbbb
 * [1,0,0,0,1,0,0,0,-1,0,0,-1,0,0]
 * [1,1,1,1,2,2,2,2, 1,1,1, 0,0,0]
 * 
 * 
 * and then there is 2-D sweep, look at the picture!
 * but anyway:
 * make matrix of n+1 * n+1 size (using the additional col and row for boundary)
 * when sweeping col (entire col left toward right) just loop to < n and pop the last element (the additional col)
 * when sweeping row (entire row top to bottom), loop to < n and remove the last row
 * 
 * also:
 * 
 *  1  -1 (cancels/flips the horizontal 1)
 * -1   1 (cancels/flips the -1 above)
 * (the second -1 cancels the top left 1)
 * 
 * go through each sub matrix and add their boundaries markings
 */


const rangeAddQueries = (n, queries) => {
    const matrix = Array(n).fill(0).map(() => Array(n).fill(0))
    for (let i = 0; i < queries.length; i++) {
        const [r1, c1, r2, c2] = queries[i];
        // top left:
        matrix[r1][c1]++; // adding 1
        // top right boundary
        // if the boundary rows and cols are out of the n limit, there is no
        // need to set boundares anyway
        if (c2+1 < n) matrix[r1][c2+1]-- // adding -1
        // bottom left boundary
        if (r2+1 < n) matrix[r2+1][c1]--;
        // bottom right boundary
        if (r2+1 < n && c2+1 < n)matrix[r2+1][c2+1]++;
    }

    // do row sweep:
    for (let row = 1; row < n; row++) {
        for (let col = 0; col < n; col++) {
            matrix[row][col] += matrix[row-1][col];
        }
    }

    // do col sweep:
    for (let col = 1; col < n; col++) {
        for (let row = 0; row < n; row++) {
            matrix[row][col] += matrix[row][col-1];
        }
    }

    return matrix;
}