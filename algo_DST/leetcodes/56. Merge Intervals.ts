/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}

 well in case the intervals aren't sorted by start
 sort them by start
 this way it is pretty easy to figure out if two adjuscent intervals overlaps
    by checking if the 2nd interval's start is within the first one
time: O(n)
space: O(n)
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    const ans = [intervals[0]];
    const len = intervals.length;
    for (let i = 0; i < len; i++) {
        const curIntvl = intervals[i]
        const lastPreIntvl = ans[ans.length-1];
        if (curIntvl[0] <= lastPreIntvl[1]) {
            lastPreIntvl[1] = Math.max(lastPreIntvl[1], curIntvl[1]);
        } else {
            ans.push(curIntvl);
        }
    }
    return ans;
};
