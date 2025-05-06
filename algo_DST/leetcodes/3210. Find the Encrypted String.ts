/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    const realK = k % s.length;
    return s.slice(realK) + s.slice(0, realK);
};