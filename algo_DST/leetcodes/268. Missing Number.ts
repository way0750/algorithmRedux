/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let ans = ((n + 1) * n) / 2;
    for (let num of nums) ans -= num;
    return ans;
};