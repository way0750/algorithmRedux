/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length

solution:
use sliding window but without a global max variable
    we will use the size of the sliding window as a way to keep track the longest sub string length we have found so far.
    And this sliding window will either expand or maintain its size, it will never reduce in size. Like how maintaining a current max variable would work: it will be the same or get larger

we will keep track of the amount of zeros
    when the amount of zeors is less than k
        we will only move front pointer forward 1 index at a time
    else
        we will move BOTH front and back pointers 1 index forward at a time
        will also update zero count with the back pointer
when done looping with front pointer
    return front - back
time: O(n)
space: O(1)


zeroCount = 3
k = 2
 -1 0 1 2 3 4 5 6 7 8 9
    1 1 1 0 0 1 1 0 1 1
        b
                      f
    
the relative distance between front and back pointer was found as the longest
sub string preivously. So they are the essentially the current max length of valid sub string.
 */

const maxConsecutiveOnes = (s, k) => {
    let zeroCount = 0;
    let back = -1;
    let front = 0;
    while (front < s.length) {
        if (s[front] === 0) zeroCount++;
        if (zeroCount > k) {
            back++
            if (s[back] === 0) zeroCount--;
        }
    }
    return front - back;
}