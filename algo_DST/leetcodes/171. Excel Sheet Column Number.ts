/**
 * @param {string} columnTitle
 * @return {number}
 Y = 25
 Z = 26
 ZY = 26 * 26 + 25
 */
 var titleToNumber = function(columnTitle) {
    let sum = 0;
    for (let char of columnTitle) {
        sum = sum * 26 + char.charCodeAt() - 64;
    }
    return sum;
};
