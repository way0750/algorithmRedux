/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.

build from small to larger cases
""
"l"
"le"
"lee"
"leet"

for each case, go from the last char in that case and accumlate chars backward
    and each time, check it against the dict see if that chunck of chars exist in the dict
    anytime that's a yes, add to cache[case] = true;

    how far to "look back"? as far as the longest word in the dict

return cache[input str]
time: O(s*c)
space: O(s**2)
 */

function wordBreak(s: string, wordDict: string[]): boolean {
    let bigCharLen = 0;
    const words = {};
    for (let i = 0; i < wordDict.length; i++) {
        bigCharLen = Math.max(bigCharLen, wordDict[i].length);
        words[wordDict[i]] = true;
    }

    const cache = {'': true};
    for (let i = 0; i < s.length; i++) {
        let j = i;
        let loopBackCount = bigCharLen;
        const sCase = s.slice(0, i+1);
        cache[sCase] = false;
        while (loopBackCount && !cache[sCase]) {
            const chunck = s.slice(j, i+1);
            if (chunck in words && cache[s.slice(0, j)]) {
                cache[sCase] = true;
            }
            loopBackCount--;
            j--;
        }
    }
    return cache[s];
};