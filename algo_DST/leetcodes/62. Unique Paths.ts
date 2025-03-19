/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array(n).fill(1);
    for (let row = 1; row < m; row++) {
        const newDP = Array(n);
        newDP[0] = 1;
        for (let col = 1; col < n; col++) {
            newDP[col] = newDP[col-1] + dp[col];
        }
        dp = newDP;
    }
    return dp[n-1];
};