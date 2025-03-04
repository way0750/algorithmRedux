/**
 * Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.

Notice that you can not jump outside of the array at any time.

 

Example 1:

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 
Example 2:

Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3
Example 3:

Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.
 

Constraints:

1 <= arr.length <= 5 * 104
0 <= arr[i] < arr.length
0 <= start < arr.length

 */
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 0 1 2 3 4 5 6
 4,2,3,0,3,1,2
 for each value, there are at most 2 directions you can go
 so just check all of them
 kinda like a depth first search using recursion
    make sure to provide a set to avoid infinite loop
base case:
    found 0 return true
    no more path return false
how to make problem smaller:
    just check i+val and i-val
what to always return:
    boolean val
what to do with return:
    if true, just keeps on returning it
    if false, check other path and return whatever is the result
time: O(n)
space: O(n)
 */
var canReach = function(arr, curIndex) {
    if (curIndex > arr.length-1 || curIndex < 0 || arr[curIndex] < 0) return false;
    arr[curIndex] *= -1;
    return arr[curIndex] === 0
        || canReach(arr, curIndex + arr[curIndex])
        || canReach(arr, curIndex - arr[curIndex])
};
