/**
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
 

Constraints:

n == ratings.length
1 <= n <= 2 * 104
0 <= ratings[i] <= 2 * 104

 */

/**

1,2,3,4,5
1,2,3,4,5

1,2,2,3,2,4
1,2,1,2,1,2

4,3,2,1
0,0,0,0
3,2,1,0
3,2,1,0
1,1,1,1
4,3,2,1

1,2,3,4
1,2,3,4
go from left to right
compare current number ONLY to the left number
if larger, take left number's candy count and + 1
    else set canday count to 0

from right to left
    if current number is larger than the one on the right
        if current candy count is already larger
            do nothing
        if smaller, add 1

1,0,2
0,0,1
1,0,0
1,0,1
1,1,1
2,1,2
= 5



1,2,3,4,5,4,3,2,1
0,1,2,3,4,0,0,0,0
0,0,0,0,4,3,2,1,0
1,1,1,1,1,1,1,1,1
1,2,3,4,9,4,3,2,1
1,2,3,4,5,4,3,2,1

1,2,3,9,8,7,6,5,4,3,2,1
0,1,2,3,0,0,0,0,0,0,0,0
0,0,0,8,7,6,5,4,3,2,1,0
0,1,2,8,7,6,5,4,3,2,1,0

1,2,3,4,5,2,1
0,1,2,3,4,0,0
0,1,2,3,4,1,0


1,2,3,4,5,2,1
0,1,2,3,4,1,0 

time: O(2n) = O(n)
space: O(2n)

1,3,2,2,1
0,1,0,0,0

0,1,0,1,0
1,1,1,1,1
1,2,1,2,1
 */

function candy(ratings: number[]): number {
    const RSize = ratings.length;
    const extraCandy = Array(RSize).fill(0);
    for (let i = 1; i < RSize; i++) {
        if (ratings[i] > ratings[i-1]) {
            extraCandy[i] = extraCandy[i-1]+ 1;
        }
    }
    let totalCandyCount = extraCandy[RSize-1] + RSize;
    for (let i = RSize-2; i > -1; i--) {
        if (ratings[i] > (ratings[i+1] || 0)) {
            extraCandy[i] = Math.max(extraCandy[i], extraCandy[i+1] + 1);
        }
        totalCandyCount += extraCandy[i];
    }
    return totalCandyCount;
};