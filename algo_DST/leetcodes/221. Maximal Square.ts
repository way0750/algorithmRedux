const maximalSquare = function(matrix) {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    let max = 0;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (matrix[row][col] === '0') continue;
            matrix[row][col] = 1 + Math.min(
                (matrix[row-1] || [])[col] || 0,
                (matrix[row-1] || [])[col-1] || 0,
                matrix[row][col-1] || 0
            );
            max = Math.max(max, matrix[row][col]);
        }
    }
    return max * max;
};
