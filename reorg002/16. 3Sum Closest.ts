/**
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104

sort the array
loop through 
    each loop: use the two pointers technique to find the closest sum
time: O(n**2)
space: O(1)
 */

function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let closest = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length;
        while (left < right) {
            const curSum = nums[i] + nums[left] + nums[right];
            const curDiff = Math.min(Math.abs(target - curSum));
            const lastDiff = Math.min(Math.abs(target - closest));
            if (curSum === target) {
                return curSum;
            } else if (curDiff < lastDiff ) {
                closest = curSum;
            }
            if (curSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
};