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

f = length - k - 1 = 3
b = length - 1
f
5,6,7,1,2,3,4
b

f
1,4,5,2,3
    b

k = 2
k = 5

length = 6
should be 2 chunks
6/5, ceil = 2
f
2,3,4,5,6,1
  bf


k = 2
      f
[-1,-100,3,99]
            b

 f
[3,99,-1,-100]
    b



time: (nums)
space: 1

const chunkCount = Math.ceil(nums.length/k)-1;

k = 4
  f
5,6,3,4,1,2
          b
*/

function rotate(nums: number[], k: number): void {
    let back = nums.length-1;
    for (let chunk = 0; chunk < Math.ceil(nums.length/k); chunk++) {
        for (let i = 0; i < k; i++) {
            let front = Math.max(0, back-k);
            [nums[front], nums[back]] = [nums[back], nums[front]];
            back--;
        }
    }
};