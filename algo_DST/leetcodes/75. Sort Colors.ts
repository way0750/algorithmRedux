/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
           |
 0,0,0,1,1,2,2,2,2
           |
      |
0,0,1,1,2,2
      |
        ^

2,0,2,1,1,0

    |
0,0,1,1,2,2
      |
    |
set two pointers
zeroP and twoP
pointer at the spot where swap can happen for 0 or 2
then loop through the array using while loop
    because after swapping the current point needs to stay
        and see if there is more swapping to do
    loop while current pointer is <= twoP
after each swapping more respective pointer to right or left
time: O(n) because worst case we need to do 2 swap at each index
so 2n = n
space; O(1) it's done in place
 */
var sortColors = function(nums) {
    let zeroP = 0;
    let twoP = nums.length - 1;
    let curP = 0;
    while (curP <= twoP) {
        const num = nums[curP];
        if (num === 0) {
            [nums[curP], nums[zeroP]] = [nums[zeroP], nums[curP]];
            curP++;
            zeroP++;
        } else if (num === 2) {
            [nums[curP], nums[twoP]] = [nums[twoP], nums[curP]];
            twoP--;
        } else {
            curP++;
        }
    }
};