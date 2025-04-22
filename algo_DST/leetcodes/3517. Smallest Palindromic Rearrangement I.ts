/**
 * @param {string} s
 * @return {string}
 count frequency for each of the 26 chars
 then go through a..z
 if char has frequency, Math.floor(freq/2);
 that is the length for left
    do a char.repeat and push it into the left array
    and unshift it into right array
    if frequency is odd, set it to mid

eventually do a left.join + mid + right.join
time: O(s.length)
space: O(s.length)
 */
var smallestPalindrome = function(s) {
    const freq = {};
    for (let i = 97; i < 123; i++) freq[String.fromCharCode(i)] = 0;
    for (let char of s) freq[char]++;
    const left = [];
    let mid = '';
    const right = [];
    for (let i = 97; i < 123; i++) {
        const char = String.fromCharCode(i);
        if (!freq[char]) continue;
        const count = Math.floor(freq[char]/2);
        const str = char.repeat(count);
        left.push(str);
        right.unshift(str);
        if (freq[char] % 2 === 1) mid = char;
    }
    return left.join('') + mid + right.join('');
};

const smallestPalindrome0002 = (s) => {
    const halfIndex = Math.floor(s.length / 2 );
    const left = [...s.slice(0, halfIndex)].sort();
    const right = left.slice().reverse();
    const mid = s.length % 2 === 1 ? s[halfIndex] : '';
    return left.join('') + mid + right.join('');
}