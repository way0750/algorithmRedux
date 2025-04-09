/**
 * @param {number[]} nums
 * @return {number}
 2,5,7,8,9,2,3,4,3,1
 1 2 3 4 5 1 2 3 1 2

 5,3,2
 5/2=2.5=2 in case that the entire array is increasing or there is a super long increasing one
 or min(5, 3) = 3

1,2,3,4,4,4,4,5,6,7
1 2 3 4 1 1 1 2 3 4

 */
var maxIncreasingSubarrays = function(nums) {
    let curLen = 1;
    let max = 1;
    let preLen = 1;
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i-1] < nums[i]) {
            curLen++;
        } else {
            max = Math.max(max, Math.floor(curLen/2), Math.min(preLen, curLen));
            preLen = curLen;
            curLen = 1;
        }
    }
    return max;
};