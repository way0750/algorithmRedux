/**
 */
var deleteAndEarn = function(nums) {
    const maxNum = Math.max(...nums);
    const dp = Array(maxNum+1).fill(0);
    for (let num of nums) dp[num] += num;
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i] + dp[i-2], dp[i-1]);
    }
    return dp[dp.length-1];
};
