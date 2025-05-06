/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const freq = {};
    for (let code = 97; code < 97 + 27; code++){
        freq[String.fromCharCode(code)] = 0;
    }
    const uniqChars = [];
    const indexes = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        freq[char]++;
        if (freq[char] === 1) {
            uniqChars.push(char);
            indexes.push(i);
        }
    }
    for (let i = 0; i < uniqChars.length; i++) {
        const char = uniqChars[i];
        if (freq[char] === 1) return indexes[i];
    }
    return -1;
};
