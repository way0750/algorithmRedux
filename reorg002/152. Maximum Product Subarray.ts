/**
 * Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
 */

function maxProduct(nums: number[]): number {
    let curMax = nums[0];
    let leftProd = 1;
    let rightProd = 1;
    for (let left = 0; left < nums.length; left++) {
        const leftNum = nums[left];
        leftProd = leftNum === 0 || leftProd === 0
            ? leftNum
            : leftProd * leftNum

        const rightNum = nums[nums.length - left - 1];
        rightProd = rightNum === 0 || rightProd === 0
            ? rightNum
            : rightProd * rightNum;

        curMax = Math.max(curMax, leftProd, rightProd);
    }
    return curMax;
};