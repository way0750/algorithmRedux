/**
 * @param {number} n
 * @return {number}
 3 + 3 + 3 = 9 still odd
what about 5, 7, 11?
all prime
so a math problem?
if prime then return n
if not prime then
    100:
2, 4, 5, 10, 10, 20, 25, 50
2: copy(1), then paste(1) = 2, then copy(1), then paste 50 - 1 = (49)
    2 + 49 = 51
4: copy, paste, copy, paste = 4
    copy, paste 24 time
    so 24 + 4 = 28;
5: copy, paste X 4, so 5
    copy, then paste 19 times, 19 + 5 = 24
10: 7
    copy, then paste 9 times = 16

20: 9
    9 + 5 = 14
50: 12
 */
var minSteps = function(n) {
    const dp = [0,0,2,3,4,5];
    for (let i = 6; i <= n; i++) {
        dp[i] = Infinity;
        for (let j = 1; j <= Math.floor(i/2); j++) {
            if (i % j === 0) {
                dp[i] = Math.min(dp[i], dp[j] + i / j);
            }
        }
    }
    return dp[n];
};