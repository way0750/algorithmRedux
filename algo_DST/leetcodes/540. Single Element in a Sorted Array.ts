/**
 * @param {number[]} nums
 * @return {number}

 1 1 4 4 5
 binary search
 
 3,3,7,7,10,11,11

 1,1,2,3,3,4,8,8


 */
 var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) return nums[mid];
        const leftEnd = nums[mid] === nums[mid-1] ? mid : mid + 1;
        if (leftEnd % 2 === 0) {
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return nums[left];
};