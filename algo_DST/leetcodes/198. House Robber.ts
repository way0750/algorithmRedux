/**
 * @param {number[]} nums
 * @return {number}
 if choose current number, then you can only choose i-2 or further back
 if not choosing current number, then you can choose both i-1 or i-2
 get the max of self+dp[i-2] or dp[i-1];
 */
 var rob = function(nums) {
    if (nums.length < 3) return Math.max(...nums);

    const dp = Array(nums.length)
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], dp[0]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1]);
    }
    return dp[nums.length-1];
};