/**
 * @param {string} s
 * @return {string[]}
 TO
 BE
 OR
 NOT
 TO
 BE
 break s into words then loop thourgh them to pick out chars from each word
 get the max word length though
 */
var printVertically = function(s) {
    const words = s.split(' ');
    let maxLen = 0;
    for (let word of words) maxLen = Math.max(maxLen, word.length);
    const chars = Array(maxLen).fill(null).map(() => []);
    for (let col = 0; col < maxLen; col++) {
        for (let row = 0; row < words.length; row++) {
            chars[col].push(words[row][col] || ' ');
        }
    }
    const ans = [];
    for (let char of chars) {
        ans.push(char.join('').trimEnd());
    }
    return ans;
};