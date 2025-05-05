/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}

simply go through each cell but keep a count
    and use the count to get the r and c coordinate
    if r = 5, c = 7
    count = 5, then the current r = 1, c = 0
    5 / 5 = 1 (r)
    5 % 5 = 0 (c);

    count 6
    6 / 5 = floor(1) (r)
    6 % 5 = 1 (c) 

    count 4
    4 / 5 = floor(4)
    4 % 5 = 0
 */
    const matrixReshape = function(mat, r, c) {
        const row = mat.length;
        const col = mat[0].length;
        if (row <= r && col <= c) return mat;
        if (row*col > r * c) return mat;
        const newMatrix = [];
        let count = 0;
        for (let row of mat) {
            for (let cell of row) {
                const newRow = Math.floor(count / c);
                const newCol = count % c;
                newMatrix[newRow] = newMatrix[newRow] || [];
                newMatrix[newRow][newCol] = cell;
                count++
            }
        }
        return newMatrix;
    };
    