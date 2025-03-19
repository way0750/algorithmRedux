/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let dp = [Infinity, ...matrix[0], Infinity];
    const len = matrix.length;
    for (let row = 1; row < len; row++) {
        const newDp = [Infinity];
        newDp[len+1] = Infinity;
        for (let col = 0; col < len; col++) {
            newDp[col+1] = matrix[row][col] + Math.min(dp[col], dp[col+1], dp[col+2]);
        }
        dp = newDp;
    }
    return Math.min(...dp);
};