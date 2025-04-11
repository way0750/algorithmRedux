/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const repeated = new Set();
    for (let i = 0; i < s.length-9; i++) {
        const str = s.slice(i, i + 10);
        if (seen.has(str)) {
            repeated.add(str);
        } else {
            seen.add(str);
        }
    }
    return [...repeated];
};