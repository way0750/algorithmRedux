/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?

 */

var minWindow = function(s, t) {
    const tRecord = {};
    let requiredCount = 0;
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        tRecord[char] = tRecord[char] || 0;
        if (tRecord[char] === 0) requiredCount++;
        tRecord[char]++;
    }

    const windowRecord = {};
    let metCount = 0;
    let back = -1;
    let minLength = Infinity;
    let ans = '';
    for (let front = 0; front < s.length; front++) {
        const char = s[front];
        windowRecord[char] = (windowRecord[char] || 0) + 1;
        if (windowRecord[char] === tRecord[char]) metCount++;

        while (metCount === requiredCount) {
            if ((front - back) < minLength) {
                minLength = front - back;
                ans = s.slice(back+1, front+1);
            }
            const backChar = s[++back];
            windowRecord[backChar]--;
            if (tRecord.hasOwnProperty(backChar) && windowRecord[backChar] < tRecord[backChar]) {
                metCount--;
            }
        }
    }

    return ans;
};