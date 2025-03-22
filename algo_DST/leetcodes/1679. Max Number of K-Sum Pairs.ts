/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations001 = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length-1;
    let count = 0;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            count++
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return count;
};

var maxOperations = function(nums, k) {
    let count = 0;
    const freq = {};
    for (let num of nums) {
        freq[k-num] = freq[k-num] || 0;
        if (freq[k-num] > 0) {
            freq[k-num]--;
            count++
        } else {
            freq[num] = (freq[num] || 0) + 1;
        }
    }

    return count;
};