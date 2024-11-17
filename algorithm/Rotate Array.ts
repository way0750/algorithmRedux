/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?

k = 3
k = k % nums.length;
if (k===0) return;

k = 2
  a
4,5,1,2,3
    b

          a
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
                                        b
a
1,2,3,4,5,17,18,19,20,21,22,23,24,25,26,27,6,7,8,9,10,11,12,13,14,15,16
          b

                              a
17,18,19,20,21,22,23,24,25,26,1,2,3,4,5,27,6,7,8,9,10,11,12,13,14,15,16
                                        b
                                
a
27,24,25,26,17,18,19,20,21,22,23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
         b

a 
4,5,6,7,8,9,1,2,3
      b 

*/
function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    if (k===0) return;
    let right = nums.length - k;
    let left = Math.max(0, right - k);
    while (right >= 0) {
        for (let i = 0; i < k; i++) {
            [nums[left + i], nums[right + i]] = [nums[right + i], nums[left + i]];
        }
        left = Math.max(0, left - k);
        right = right - k
    }
};