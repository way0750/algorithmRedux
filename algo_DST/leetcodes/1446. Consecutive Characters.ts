/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max = 0;
    let back = 0;
    for (let front = 0; front <= s.length; front++) {
        if (s[front] !== s[back]) {
            max = Math.max(max, front-back);
            back = front;
        }
    }
    return max;
};