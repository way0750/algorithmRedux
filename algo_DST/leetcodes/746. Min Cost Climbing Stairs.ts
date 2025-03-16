/**
 * @param {number[]} cost
 * @return {number}
 initialize dp to be:
 [10, 15]
 */
 var minCostClimbingStairs = function(cost) {
    if (cost.length < 3) return Math.min(...cost);
    const dp = Array(cost.length+1);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let step = 2; step < cost.length; step++) {
        dp[step] = Math.min(dp[step-1], dp[step-2]) + cost[step];
    }
    return Math.min(dp[cost.length-1], dp[cost.length-2]);
};