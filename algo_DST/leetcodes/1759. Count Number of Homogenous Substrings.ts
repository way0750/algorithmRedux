/**
 * @param {string} s
 * @return {number}
 1: 1
 2: 3
 3: 6
 */
 var countHomogenous = function(s) {
    let count = 0;
    let subCount = 1;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        subCount = char === s[i-1] ? subCount + 1 : 1;
        count += subCount;
    }
    return count % (10**9 + 7);
};