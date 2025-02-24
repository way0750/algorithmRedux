/**
 * You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game.

A character is said to be weak if any other character has both attack and defense levels strictly greater than this character's attack and defense levels. More formally, a character i is said to be weak if there exists another character j where attackj > attacki and defensej > defensei.

Return the number of weak characters.

 

Example 1:

Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.
Example 2:

Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.
Example 3:

Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.
 

Constraints:

2 <= properties.length <= 105
properties[i].length == 2
1 <= attacki, defensei <= 105

 */

/**
 * @param {number[][]} properties
 * @return {number}
 1,5; 10,4; 4,3
 1,5; 4,3; 10,4
 
 5-5, 6-3, 3-6
 3-6, 5-5, 6-3

 9, 9, 10
 5-5, 3-6, 6-3

 1-5, 10-4, 4-3
 6, 14, 7

 1-5, 4-3, 10-4
 6.   7.   10

 1-5, 10-4, 4-3
 1-5, 4-3, 10-4

 4-3, 10-4, 1-5

 4-1 and 10-4, the relative order maintains


 1-5, 10-4, 4-3

a - b && b - a
1-5, 4-2, 4-3, 10-3, 10-4


5-5, 6-3, 3-6
3-6, 5-5, 6-3
6 5 3 length doesn't change so none

so first sort the [0] in ascending order, if can't resolve the sort by [1]
    in descending order

then loop from the sorted array looking back to remove any one with a smaller [1]
time: O(nlogn + n**2)
space: O(n);
 */
var numberOfWeakCharacters = function(properties) {
    const len = properties.length;
    const sorted = properties.sort((a, b) => {
        const result = a[0] - b[0];
        if (result === 0) {
            return b[1] - a[1];
        } else {
            return result;
        }
    });

    let count = 0;
    let curMax = -Infinity;
    for (let i = sorted.length-1; i > -1; i--) {
        if (sorted[i][1] < curMax) count++
        curMax = Math.max(curMax, sorted[i][1]);
    }

    return count;
};