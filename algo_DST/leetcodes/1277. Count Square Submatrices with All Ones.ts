/**
 * @param {number[][]} matrix
 * @return {number}

[
  [0,1,1,1],
  [1,1,2,2],
  [0,1,2,3]
]

1 1 1 1
1 2 2 2
1 2 3 3
1 2 3 4

basically if > 0
    then count += size
 */
    var countSquares = function(matrix) {
        let count = 0;
        const rowLen = matrix.length;
        const colLen = matrix[0].length;
        for (let row = 0; row < rowLen; row++) {
            for (let col = 0; col < colLen; col++) {
                if (matrix[row][col] === 0) continue;
                if (row === 0 || col === 0) {
                    count++;
                } else {
                    matrix[row][col] = 1 + Math.min(
                        matrix[row-1][col],
                        matrix[row-1][col-1],
                        matrix[row][col-1]
                    );
                    count += matrix[row][col];
                }
            }
        }
        return count;
    };
    