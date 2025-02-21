/**
 * Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
Example 3:

Input: s = "abc"
Output: 1
 

Constraints:

3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters.
 */


/**
 * @param {string} s
 * @return {number}

 longest/smallest/largest
 exactly equal to
 all of the


 abcabc
 ---1
 C---2
 CC---3
 CCC---4

 find a small sub string containing all the characters
 then look back and see how many characters are bahind this
 any character can essentially be part of this sub string anyway
 so the count of the characters behind it + 1 = all the possible
    sub string until end of current sub string

aaacb
CC---3

use sliding window for positive match of existance of abc
    use freq count

 */
var numberOfSubstrings = function(s) {
    const freq = { a: 0, b: 0, c: 0 };
    let count = 0;
    let back = -1;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        freq[char]++;
        while (freq.a && freq.b && freq.c) {
            // get the shortest window
            freq[s[++back]]--;
        }
        count += (back + 1);
    }
    return count;
};