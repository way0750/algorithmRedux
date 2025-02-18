/**
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
 

Constraints:

1 <= nums.length <= 104
-109 <= nums[i] <= 109
 */


/**
 0. 1. 2  3. 4
[1, 2, 3, 4, 3]

  0.  1.  2.  3.  4
[2, -1, -1, -1, -1]

length = 5
stack: a monotonic decreasing or === stack
[4, 3]

the stack of indexes of numbers that still haven't found their larger
numbers yet, and the stack is sort in equal and descending order
the loop:
    for each index, the purpose is to assign itself as the next large number
    for all previous number who still haven't found one yet
        and you can tell which numbers still the current num because the stack
            is sorted in equal / descending order so just compare those numbers
            to self until getting one that's larger
    it just needs to go twice, in which case, that will be able to
find larger number for any index (even the last index)

time:
o(n * 2 + n for the stack)
no you won't get n**2 because you will put all numbers in it at most
2 twice and pop at most twice in the entire run
so O(n*2 + n*2) = O(n)
space: O(n) for the monotonic stack

what is the essence of monotonic stack and application?
keepping prevous unprocessed data until later point?
that's just stack in general
by having order then what?
you are only choosing some of data in the stack
 */
var nextGreaterElements = function(nums) {
    const waitIs = [];
    const ans = Array(nums.length).fill(-1);
    for (let i = 0; i < (nums.length * 2); i++) {
        const realI = i % nums.length;
        while (waitIs.length && nums[waitIs[waitIs.length-1]] < nums[realI]) {
            ans[waitIs.pop()] = nums[realI];
        }
        waitIs.push(realI);
    }
    return ans;
};