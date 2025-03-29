/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 i = 0
 k = 0
    1 > 0
 k = 1
    2 > 1

brute force compare pattern against nums
time: O(nums.length * pattern.length)
space: O(1);
    
0 1 2 3 4

 */
var countMatchingSubarrays = function(nums, pattern) {
    let count = 0;
    for (let i = 0; i < nums.length - pattern.length; i++) {
        let pass = true;
        let k = 0
        while (pass && k < pattern.length) {
            const num = nums[i + k];
            const nextNum = nums[i + k + 1];
            pass = num < nextNum && pattern[k] === 1 ||
                num === nextNum && pattern[k] === 0 ||
                num > nextNum && pattern[k] === -1;   
            k++;
        }
        if (pass) count++;
    }
    return count;
};