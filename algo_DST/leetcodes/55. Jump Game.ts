/**
 * @param {number[]} nums
 * @return {boolean}
set a maxReach = 0 index
loop through the array
    if current index < maxReach return false, we are not supposed to be here
    if >=, update the maxReach = current index + current value
default return true;
 */
export const canJump = function(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
};