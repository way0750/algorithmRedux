/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 go through each char index by index on s
 then at the same time compare word to current index
 time: O(s.length)
 space: O(1);
 */
 var isPrefixString = function(s, words) {
    let wordCharLen = 0;
    let wi = 0;
    const wordChunks = [];
    while (wordCharLen < s.length && words[wi]) {
        wordCharLen += words[wi].length;
        wordChunks.push(words[wi]);
        wi++;
    }
    if (wordCharLen > s.length) return false;
    return s === wordChunks.join('');
};
