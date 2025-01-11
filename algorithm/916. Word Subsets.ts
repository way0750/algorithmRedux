/**
 * You are given two string arrays words1 and words2.

A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.

Return an array of all the universal strings in words1. You may return the answer in any order.

 

Example 1:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]
Example 2:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
Output: ["apple","google","leetcode"]
 

Constraints:

1 <= words1.length, words2.length <= 104
1 <= words1[i].length, words2[i].length <= 10
words1[i] and words2[i] consist only of lowercase English letters.
All the strings of words1 are unique.

 */

function wordSubsets(words1: string[], words2: string[]): string[] {
    const w2Freq = {};
    for (let i = 0; i < words2.length; i++) {
        const word = words2[i];
        const curWordFreq = {};
        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            curWordFreq[char] = curWordFreq[char] || 0;
            curWordFreq[char]++;
        }
        for (let key in curWordFreq) {
            w2Freq[key] = Math.max(w2Freq[key] || 0, curWordFreq[key]);
        }
    }

    return words1.filter((w1) => {
        const w1Freq = {};
        for (let i = 0; i < w1.length; i++) {
            const char = w1[i];
            w1Freq[char] = w1Freq[char] || 0;
            w1Freq[char]++;
        }
        for (let key in w2Freq) {
            if (!w1Freq[key] || w1Freq[key] < w2Freq[key]) return false;
        }
        return true;    
    });
};
