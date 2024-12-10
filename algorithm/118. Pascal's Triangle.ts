/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
 */

function generate(numRows: number): number[][] {
    const tri = [[1]];
    if (numRows === 1) return tri;
    let cache = [0,1,0];
    while (--numRows) {
        const newRow = [];
        for (let i = 0; i < cache.length-1; i++) {
            newRow.push(cache[i] + cache[i+1]);
        }
        cache = [0, ...newRow, 0];
        tri.push(newRow);
    }
    return tri;
};