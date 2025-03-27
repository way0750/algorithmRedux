/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 prefix with fixed window size (length - k)
 this will take care of all the possible combos of front + back
 prefix sum from left
    then from right
    then slide the window from left to right
    left sum + right sum
    keep the max
time: O(n)
space: O(n)

 */
// var maxScore = function(cardPoints, k) {
//     const len = cardPoints.length;
//     const prefixLeft = Array(cardPoints.length+2).fill(0);
//     for (let i = 0; i < len; i++) {
//         prefixLeft[i+1] = prefixLeft[i] + cardPoints[i];
//     }

//     const prefixRight= Array(cardPoints.length+2).fill(0);
//     for (let i = len-1; i > -1; i--) {
//         prefixRight[i+1] = prefixRight[i+2] + cardPoints[i];
//     }

//     let front = len - k + 1
//     let back = 0;
//     let max = -Infinity
//     while (front < prefixLeft.length-1) {
//         max = Math.max(max, prefixLeft[back] + prefixRight[front]);
//         front++
//         back++
//     }
//     console.log(max)
//     return max;
// };

var maxScore = function(cardPoints, k) {
    const len = cardPoints.length;

    const prefixLeft = Array(k + 1).fill(0);
    const prefixRight = Array(k + 1).fill(0);

    for (let i = 0; i < k; i++) {
        prefixLeft[i + 1] = prefixLeft[i] + cardPoints[i];
        prefixRight[i + 1] = prefixRight[i] + cardPoints[len - 1 - i];
    }

    let max = -Infinity;

    // Try taking i cards from left and k - i from right
    for (let i = 0; i <= k; i++) {
        max = Math.max(max, prefixLeft[i] + prefixRight[k - i]);
    }

    return max;
};