/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function(x, y) {
    const rounds = Math.min(x, Math.floor(y/4))
    return rounds % 2 === 1 ? 'Alice' : 'Bob';
};