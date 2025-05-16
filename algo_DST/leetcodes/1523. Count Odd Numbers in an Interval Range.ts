/**
 * @param {number} low
 * @param {number} high
 * @return {number}


13 14 15 16 17 18

14 15 16 17

if odd:
    floor (high - low) / 2 + 1
if even:
    ceil (high - low) / 2

3 4 5 6 7
 */
var countOdds = function(low, high) {
    if (low % 2 === 1) {
        return Math.floor((high - low) / 2) + 1;
    } else {
        return Math.ceil((high - low) / 2);
    }
};
