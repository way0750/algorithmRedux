/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 0,0,1,6,3,0,1,3,0
 1 6 0 0
 if front is > 0, swap
    then move back
 if front is === 0
    don't move back further
*/
var moveZeroes = function(nums) {
    let back = 0;
    for (let front = 0; front < nums.length; front++) {
        if (nums[front] !== 0) {
            [nums[back], nums[front]] = [nums[front], nums[back]]
            back++
        }
    }
    return nums;
};
