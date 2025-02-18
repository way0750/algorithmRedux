/**
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

prefix sum:
keep a running sum
    then for each running sum - k = lookBackSum
        if lookBackSum exists increase count
    always add current running sum to record

time: O(n)
space: O(n)

k = 0
[0,0]
should return 3
[0], [0], [0,0]
{0: 2}
count = 3
 */

var subarraySum = function(nums, k) {
    const lookBackSumsCount = {0: 1};
    let count = 0;
    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        const lookBackSum = runningSum - k;
        if (lookBackSumsCount[lookBackSum] !== undefined) {
            count += lookBackSumsCount[lookBackSum];
        }
    }

    return count;
};