/**
 * 713. Subarray Product Less Than K
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
 

Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

maintain a running prod, and two pointers back and front
keep on moving front forward and add to running prod
    as long as the prod is < k
        then count all the possible combo by front - end + self (1)
        ex: 
        a, c, b, d
        4, 1, 2, 3
        b.       front
        all possible combos:
        4123
         123
          23 fromt 4123 to 23 essentially is the difference between front and back(exclusive of self)
           3 then add self
        so basically as front pointer moves forward
            we are looking backward to get all the possible combos
 */
            var numSubarrayProductLessThanK = function(nums, k) {
                let prod = 1;
                let back = -1;
                let count = 0
                for (let front = 0; front < nums.length; front++) {
                    prod *= nums[front];
                    // get a range that the prod is strickly smaller than k
                    while (prod >= k && back < front) {
                        prod /= nums[++back];
                    }
                    // then get all the possible combos
                    count += front - back; // back is alway pointing to the excluded num so
                    // the result is the entire subarray including self num
                }
                return count;
            };