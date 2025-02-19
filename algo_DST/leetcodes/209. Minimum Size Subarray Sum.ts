/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
 */


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 use a sliding window to keep track of current window sum
 once it >= target get the length
 then start to narrow the window as long as it is >=
    update the length
keep loop forward the whole time:
time: O(n)
space: O(1);
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let back = -1;
    let minLen = Infinity;
    for (let front = 0; front < nums.length; front++) {
        sum += nums[front];
        while (sum >= target) {
            minLen = Math.min(minLen, front - back);
            sum -= nums[++back]
        }
    }
    return minLen === Infinity ? 0 : minLen;
};