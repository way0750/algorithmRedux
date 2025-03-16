/**
 * @param {number[]} nums
 * @return {number}


 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        // finding the max dp where nums[i] is smaller than current nums[i]
        for (let back = 0; back < i; back++) {
            if (nums[back] < nums[i] && dp[back] + 1 > dp[i]) {
                dp[i] = dp[back] + 1;
            }
        }
    }

    return Math.max(...dp);
};