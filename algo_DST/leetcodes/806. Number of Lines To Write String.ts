/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const widthsRec = {};
    for (let i = 0; i < widths.length; i++) {
        widthsRec[String.fromCharCode(i+97)] = widths[i];
    }
    let lineCount = 1;
    let curLineWidth = 0;
    for (let char of s) {
        if (curLineWidth + widthsRec[char] > 100) {
            lineCount++;
            curLineWidth = 0;
        }
        curLineWidth += widthsRec[char];
    }
    return [lineCount, curLineWidth];
};