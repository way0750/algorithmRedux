/**
 * @param {string} word
 * @return {number}
 xyz xyz xyz xyz w
 x: 4
 y: 4
 z: 4
 w: 1

sort the frequencies in decending order
0..8: frequency * 1
8..16: frequency * 2
16..end: frequency * 3
 */
var minimumPushes = function(word) {
    const freqs = Array(26).fill(0);
    for (let char of word) {
        freqs[char.charCodeAt()-97]++
    }
    freqs.sort((a, b) => b-a);
    let count = 0;
    for (let i = 0; i < freqs.length; i++) {
        count += freqs[i] * Math.ceil((i + 1)/8);
    }
    return count;
};
