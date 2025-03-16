/**
 * @param {number} n
 * @return {number}
 n:
 XXXXXXXXXX
 1235
 so basically a fib problem
 */
 var climbStairs = function(n) {
    if (n < 3) return n;
    let prev1 = 1
    let prev2 = 2
    for (let i = 3; i <= n; i++) {
        const n = prev1 + prev2;
        prev1 = prev2
        prev2 = n;
    }
    return prev2;
};