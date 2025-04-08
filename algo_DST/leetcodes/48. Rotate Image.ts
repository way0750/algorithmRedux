/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export var rotate = function(matrix) {
    matrix.reverse();
    const len = matrix.length;
    for (let row = 0; row < len; row++) {
        for (let col = row + 1; col < len; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }
    return matrix;
};