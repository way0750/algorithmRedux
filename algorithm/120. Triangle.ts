/**
 * Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10
 

Constraints:

1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104
 

Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?

just save all the possibel previous paths' sum and reutrn the smallest one
go from top to bottom
    and then for each index, + the smallest previous path min
    keep track of which one is smallest globally
return global min;
time: O(number of nodes)
space: O(row count)
 */

function minimumTotal(triangle: number[][]): number {
    const preMins = [];
    for (let rowIndex = 0; rowIndex < triangle.length; rowIndex++) {
        const row = triangle[rowIndex];
        const newMins = [];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const curNum = row[colIndex];
            const leftPre = colIndex-1 in row ? row[colIndex-1] : Infinity;
            const rightPre = colIndex+1 in row ? row[colIndex+1] : Infinity;
            const newMin = Math.min(leftPre + curNum, curNum + rightPre)
            newMins.push(newMin);
        }
    }

    return Math.min(...preMins);
};
