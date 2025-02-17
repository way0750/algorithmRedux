/**
     * Given a string s, find the length of the longest 
    substring
    without repeating characters.

    

    Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    

    Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
 */

function lengthOfLongestSubstring002(s: string): number {
    let length = 0;
    let back = -1;
    const freq = {};
    for (let front = 0; front < s.length; front++) {
        const char = s[front];
        freq[char] = (freq[char] || 0) + 1;
        while (freq[char] > 1) {
            back++;
            freq[s[back]]--;
        }
        length = Math.max(length, front - back);
    }
    return length;
};