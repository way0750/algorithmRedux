const threeSum002 = function(nums) {
    const ans = {};
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length-2; i++) {
        let left = i+1;
        let right = nums.length-1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                const t = [nums[i], nums[left], nums[right]];
                ans[t] = t;
                left++;
                right--;
            } else if (sum < 0) {
                left++
            } else {
                right--;
            }
        }
    }
    return Object.values(ans)
};


/**
 * 
 * k = 3
 * 1 2 3 4 5 6 7 8 9
 * 1 2 3 4 5 6 9 8 7
 * 6 5 4 3 2 1 9 8 7
 * 7 8 9 1 2 3 4 5 6
 * 
 */