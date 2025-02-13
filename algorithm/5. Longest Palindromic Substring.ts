/**
 * Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

const longestPalindrome = function(s) {
    const ls = '#' + s.replace(/\w/g, (w) => `${w}#`);
    const dp = Array(ls.length).fill(0);
    let centerI = 0;
    let rightReach = 0;
    for (let i = 0; i < ls.length; i++) {
        if (i < rightReach) {
            dp[i] = Math.min(rightReach - i, dp[2*centerI - i]);
        }

        while (ls[i-dp[i]-1] && ls[i-dp[i]-1] === ls[i+dp[i]+1]) {
            dp[i]++;
        }
        if (i+dp[i] > rightReach) {
            centerI = i;
            rightReach = i + dp[i];
        }
    }
    let maxR = -1;
    let maxRI = -1;
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] > maxR) {
            maxR = dp[i];
            maxRI = i;
        }
    }

    const start = maxRI - maxR;
    const end = maxRI + maxR;
    return ls.substring(start, end).replace(/#/g, '');
};
