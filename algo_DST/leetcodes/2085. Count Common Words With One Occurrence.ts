/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const rec = {};
    for (let word of words1) rec[word] = (rec[word] || 0) + 1;
    for (let word of words2) rec[word] < 2 && rec[word]--;
    let count = 0;
    for (let word in rec) rec[word] === 0 && count++;
    return count;
};
