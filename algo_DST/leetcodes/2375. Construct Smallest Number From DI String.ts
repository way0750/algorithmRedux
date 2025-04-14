/**
 * @param {string} pattern
 * @return {string}





 */
var smallestNumber = function(pattern) {
    const numStr = '123456789';
    const nums = [];
    let curChunk = [];
    for (let i = 0; i <= pattern.length; i++) {
        curChunk.unshift(numStr[i]);
        if (pattern[i] === 'I' || i === pattern.length) {
            nums.push(...curChunk);
            curChunk = [];
        }
    }
    return nums.join('');
};