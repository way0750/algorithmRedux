/**
 * @param {number[]} nums
 * @return {number}
i 0 1 2 3 4 5
n 6 0 8 2 1 5

i 1 4 3 5 0 2
n 0 1 2 5 6 8





*/
var maxWidthRamp = function(nums) {
    const stack = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length-1]] > nums[i]) {
            stack.push(i);
        } else {
            let left = 0;
            let right = stack.length - 1;
            while (left < right) {
                const mid = left + Math.floor((right - left) / 2);
                if (nums[stack[mid]] > nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            max = Math.max(max, i - stack[left]);
        }
    }

    return max;
};