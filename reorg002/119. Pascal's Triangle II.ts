/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?


 */

function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];
    let cache = [0,1,0];
    while (rowIndex--) {
        const newCache = [];
        for (let i = 0; i < cache.length-1; i++) {
            newCache.push((cache[i] + cache[i+1]));
        }
        newCache.unshift(0);
        newCache.push(0);
        cache = newCache;
    }

    cache.shift();
    cache.pop();
    return cache;
};