/**
 * @param {string} s
 * @return {string}
 */
var reverseWords001 = function(s) {
    const parts = s.split(' ');
    const ans = [];
    for (let part of parts) {
        if (part.length) {
            ans.push([...part].reverse().join(''));
        } else {
            ans.push(part);
        }
    }
    return ans.join(' ');
};

const reverseWords = (s) => {
    const ans = [];
    let part = [];
    for (let char of s) {
        if (char === ' ') {
            ans.push(part.join(''));
            part = [];
            ans.push(' ');
        } else {
            part.unshift(char);
        }
    }
    ans.push(part.join(''));
    return ans.join('');
};