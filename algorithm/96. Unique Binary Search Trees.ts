/**
 * Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

 

Example 1:


Input: n = 3
Output: 5
Example 2:

Input: n = 1
Output: 1
 

Constraints:

1 <= n <= 19
 */

function numTrees(n: number): number {
    const cache = { 0: 1, 1: 1, 2: 2, 3: 5 };
    if (cache[n]) return cache[n];
    for (let i = 4; i <= n; i++) {
        cache[i] = 0;
        for (let left = 0; left < i; left++) {
            const right = i - left - 1;
            cache[i] += cache[left] * cache[right];
        }
    }
    return cache[n];
};