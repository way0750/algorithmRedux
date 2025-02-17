/**
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

left vs right
if left is sorted and contains the target
    go left
if the right is sorted and contains the target
    go right
if target isn't in any sorted portion
    go toward the unsorted portion

 */


function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = left + Math.floor((right - left)/2);
        if (nums[mid] === target) return mid;
        const isLeftSorted = nums[left] < nums[mid];
        const isRightSorted = nums[mid] < nums[right-1];
        if (isLeftSorted && nums[left] <= target && target <= nums[mid]) {
            right = mid;
        } else if (isRightSorted && nums[mid] <= target && target <= nums[right-1]) {
            left = mid + 1;
        } else if (!isLeftSorted) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
