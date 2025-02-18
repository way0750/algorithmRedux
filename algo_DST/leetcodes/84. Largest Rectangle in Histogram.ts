/**
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
 

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104

 */

/**
 0. 1. 2. 3. 4. 5. 6. 7. 8
 6, 5, 4, 5, 6, 7, 8, 6, 5
-1,-1,-1, 2, 3, 4, 5, 3, 2

do two loops to find for each index
    the exclusive bounday of first index where a height is shorter than self
        on the left and then another loop but for the right side
    for left side you might have to loop backward to left to find it
        but can refer to each height that's tall, and use its boundry record
            to cut some searching time
another loop find for each index the width from left and right
    times current value to get the size of current area
    update max if needed

set leftBoundIndexes = []
set rightBoundIndexes = [];
the searching, because you can jump, you will actually won't end up with a
n**2 run time

time: O(n*3 so just n)
space: O(n*2) so just n
 */
var largestRectangleArea = function(heights) {
    const len = heights.length
    const leftBoundIs = Array(len);
    const rightBoundIs = Array(len);

    for (let i = 0; i < len; i++) {
        const curHeight = heights[i];
        let bI = i - 1;
        while (bI > -1 && heights[bI] >= curHeight) {
            bI = leftBoundIs[bI];
        }
        leftBoundIs[i] = bI;
    }

    for (let i = len-1; i > -1; i--) {
        const curHeight = heights[i];
        let bI = i + 1;
        while (bI < len && heights[bI] >= heights[i]) {
            bI = rightBoundIs[bI];
        }
        rightBoundIs[i] = bI;
    }

    // remember all boundaries are exclusive
    let max = 0;
    for (let i = 0; i < len; i++) {
        const leftBI = leftBoundIs[i];
        const rightBI = rightBoundIs[i];
        const width = rightBI - leftBI - 1;
        max = Math.max(max, width * heights[i]);
    }
    return max;
};