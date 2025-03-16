/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const fibs = [0,1,1];
    if (n < 3) return fibs[n];
    for (let i = 3; i <= n; i++) {
        fibs.push(fibs[0] + fibs[1] + fibs[2]);
        fibs.shift();
    }
    return fibs.pop();
};