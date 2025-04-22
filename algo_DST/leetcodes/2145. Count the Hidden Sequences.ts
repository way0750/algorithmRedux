/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 1,-3,4
0, 1, -2, 2
min: -2, 1 - -2 =  3 go up by 3
max: 2, go up by 3, 5
6 - 5 + 1 = 2
 */
var numberOfArrays = function(differences, lower, upper) {
    let min = 0
    let max = 0;
    let sum = 0;
    for (let num of differences) {
        sum += num;
        min = Math.min(min, sum);
        max = Math.max(max, sum);
    }
    const scale = lower - min;
    return Math.max(upper - (max + scale) + 1, 0);
};