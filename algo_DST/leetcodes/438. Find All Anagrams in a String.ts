/**
 * Given two strings s and p, return an array of all the start indices of p's 
anagrams
 in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.


anagram same letters, same frequency of each letter, but different order of each letter

find all sub strings in s that has the length of p
    and has the same char and frequency as chars in p
many char to many char comparison
so maintain a freqency record of p
and then the current frequency record of s as well
set matchCount = unique chars from p, to keep track of currently how many chars
    and their frequencies have been found in s's sliding window
    when shared letter (found in both strings) are found to have same frequency
        increase counter
    if same letter but more frequency in either one
        decrease due to sliding window, counter--
        increase over the needed frequency, counter--
    if different letter
        because sliding window moving forward, counter--
            remember to update the back pointer's char's freq

time: O(p+s)
space: O(p)
 */

var findAnagrams = function(s, p) {
    const pRecord = Array(26).fill(0);
    let target = 0;
    for (let i = 0; i < p.length; i++) {
        const charI = p[i].charCodeAt() - 97;
        pRecord[charI]++;
        if (pRecord[charI] === 1) target++;
    }

    const sRecord = Array(26).fill(0);
    let front = 0;
    let matchCount = 0;
    const ans = []
    while (front < p.length) {
        const charI = s[front].charCodeAt();
        sRecord[charI]++;
        if (sRecord[charI] === pRecord[charI]) {
            matchCount++;
        } else if (sRecord[charI] > pRecord[charI]) {
            matchCount--;
        }
        front++;
    }

    if (matchCount === target) ans.push(0);

    let back = -1;
    while (front < s.length) {
        const charI = s[front].charCodeAt();
        sRecord[charI]++;
        if (sRecord[charI] === pRecord[charI]) {
            matchCount++;
        } else if (sRecord[charI] > pRecord[charI]) {
            matchCount--;
        }
        const backCharI = s[++back].charCodeAt();
        sRecord[backCharI]--;
        if(sRecord[backCharI] === pRecord[charI]) {
            matchCount++;
        } else if (sRecord[backCharI] < pRecord[charI]) {
            matchCount--;
        }

        if (matchCount === target) ans.push(back + 1);
        front++;
    }
    return ans;
};