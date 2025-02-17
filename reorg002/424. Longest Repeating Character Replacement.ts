/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
k = 7
abcdefg

k = 1
aaaaba

k = 100
a

k=2
abcd
a=1
b=1
c=1

two pointers?
as we loop through the string
keep track of the frequency of each letter
then find the max and the rest
as long as the rest combined frequency is <= k
keep going
until rest combined is > k
    then 
    move the back pointer forward and reduce each char's frequency

....
so each loop forward
    find the max and the rest?

then time is gonna be O(26s)
space: O(1)

 */
var characterReplacement = function(s, k) {
    const freq = Array(26).fill(0);
    let back = -1;
    let curMaxLen = 0;
    for (let front = 0; front < s.length; front++) {
        const char = s[front];
        let alphaI = char.charCodeAt() - 65;
        freq[alphaI]++;
        let curSum = freq.reduce((sum, n) => sum + n);
        let curMax = Math.max(...freq);
        let diff = curSum - curMax;
        while (diff > k) {
            const backCharI = s[++back].charCodeAt() - 65;
            freq[backCharI]--
            curSum = freq.reduce((sum, n) => sum + n);
            curMax = Math.max(...freq);
            diff = curSum - curMax;
        }
        curMaxLen = Math.max(curMaxLen, front - back);
    }
    return curMaxLen;
};
