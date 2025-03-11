function addToK (nums, k, idx) {
    if (nums[idx] === k) return true
    const ans = addToK(nums, k, idx+1);
}