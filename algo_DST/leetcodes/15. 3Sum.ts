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