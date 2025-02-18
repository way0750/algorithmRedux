/**
 * Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 

Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1

solution:
keep a running sum
and for the running sum at each index get the mod
    if any of the previous index has the exact mod
    that means, previous sum + k = current sum
        that's the only way to get the exactly mod
    if k = 7
    previous sum is 10 and mod is 3
    and current sum is 24, mod is also 3
    to get the same mod at a different sum, you would need to +/- 7 * n (n of certain amount, but that doesn't matter)
    so the portion between previous sum (exclusive) .... and current sum (inclusive)
    must be divisible by k

keep a running sum
keep a record of mod: index, initialized to {0: -1}
loop from left to right
    update the running sum
    get mod
    check mod in record
    if exists, then do a i - previous mod index
        if > 1, return true
default return false
time: O(n)
space: O(n) for the mod array
 */
const checkSubarraySum = function(nums, k) {
    if (k === 0) return false;
    const mods = {0: -1};
    let runningMod = 0;
    for (let i = 0; i < nums.length; i++) {
        runningMod += nums[i];
        runningMod %= k
        if (mods[runningMod] !== undefined) {
            if ((i - mods[runningMod]) > 1) return true;
        } else {
            mods[runningMod] = i;
        }
    }
    return false;
};
