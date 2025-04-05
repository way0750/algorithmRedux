/**
 * @param {string} s
 * @param {character} c
 * @return {number}

 a...aa...a...a
 5:5
 4:4
 3:3
 2:2
 1:1
 */
 var countSubstrings = function(s, c) {
    let count = 0;
    for (let char of s) char === c && count++
    return (count+1) * count * 0.5;
};