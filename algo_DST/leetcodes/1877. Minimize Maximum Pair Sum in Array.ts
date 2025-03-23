/**
 * @param {number[]} nums
 * @return {number}

 1 2 3 4 4 5
 6 6 7


 2 3 4 4 5 6
 8 8 8

 */
 var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let max = 0;
    let left = 0;
    let right = nums.length-1;
    while (left < right) {
        max = Math.max(max, nums[left] + nums[right]);
        left++;
        right--;
    }
    return max;
};