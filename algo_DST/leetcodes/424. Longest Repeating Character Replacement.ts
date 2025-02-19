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

as we keep track of the char that has the highest frequency
    we can tell how many chars are different and their combined frequency
    if that combined frequency is === k, then that's the max length string
    we can have.

once we found a long window / current longest sub string
    the char that appears the most, and its frequency will be minimun size for
    future potential sub string's most frequent chars.
        if the most the most frequent chars in the later sub string doesn't even
            have a frequency that's longer than the current minimun size (from previous char)
            then the sub string size isn't longer anyway
 */
            var characterReplacement001 = function(s, k) {
                let maxStrLen = 0;
                let curMaxCharCount = 0;
                let back = -1;
                const freq = Array(26).fill(0);
                for (let front = 0; front < s.length; front++) {
                    const charI = s[front].charCodeAt() - 65;
                    freq[charI]++;
                    curMaxCharCount = Math.max(curMaxCharCount, freq[charI]);
                    if (front - back - curMaxCharCount <= k) {
                        maxStrLen = Math.max(maxStrLen, front - back);
                    } else {
                        const backCharI = s[++back].charCodeAt() - 65;
                        freq[backCharI]--;
                    }
                }
                return maxStrLen;
            };
            
            var characterReplacement = function(s, k) {
                let maxStrLen = 0;
                let curMaxCharCount = 0;
                let back = -1;
                const freq = Array(26).fill(0);
                for (let front = 0; front < s.length; front++) {
                    const charI = s[front].charCodeAt() - 65;
                    freq[charI]++;
                    curMaxCharCount = Math.max(curMaxCharCount, freq[charI]);
                    if (front - back - curMaxCharCount > k) {
                        const backCharI = s[++back].charCodeAt() - 65;
                        freq[backCharI]--;
                    }
                    maxStrLen = Math.max(maxStrLen, front - back);
                }
                return maxStrLen;
            };