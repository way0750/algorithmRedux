/**
 * Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
Example 2:

Input: citations = [1,3,1]
Output: 1
 

Constraints:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000
0,1,3,5,6

44,55,66,77
4
77,66,55,44,3,2,1,0
1 . 2 3 . 4 5 6 7 8

4,4,4,3,3,3,2,2,2
1,2,3,4,5,6,7,8,9

n paper with at least n citations
sort number from large to small
this way for each number, you can tell that all numbers on the left are equal/larger to current number
then compare the current paper count: index+1
    you get an amount of paper with at least num amount of citation

    but if the citation count < paper count
        that's invalid
        so just return the first last paper that is still > citation count



1,2,3,4,5,6,7
0,1,2,3,4,5,6
 */

function hIndex001(citations: number[]): number {
    let curH = 0;
    let i = 0;
    citations = citations.sort((a, b) => b-a);
    while (i < citations.length && citations[i] > i) {
        curH = i++;
    }
    return curH;
};

function hIndex(citations: number[]): number {
    let curH = 0;
    citations = citations.sort((a, b) => b-a);
    let left = 0;
    let right = citations.length;
    while (left <= right) {
        const mid = left + Math.floor((right - left)/2);
        if (mid+1 > citations[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return curH;
};