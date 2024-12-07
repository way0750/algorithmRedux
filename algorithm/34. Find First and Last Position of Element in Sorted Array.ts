/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */

function searchRange(nums: number[], target: number): number[] {
    let start = -1
    // go left:
    let left = 0;
    let right = nums.length;
    while (left < right && start === -1) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target && nums[mid-1] !== target) {
            start = mid;
        } else if (target < nums[mid] || nums[mid-1] === target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    let end = -1
    // go right:
    left = 0;
    right = nums.length;
    while (left < right && end === -1) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target && target !== nums[mid+1]) {
            end = mid;
        } else if (nums[mid] < target || target === nums[mid+1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return [start, end];
};