/**
 * You are given two strings word1 and word2. You want to construct a string merge in the following way: while either word1 or word2 are non-empty, choose one of the following options:

If word1 is non-empty, append the first character in word1 to merge and delete it from word1.
For example, if word1 = "abc" and merge = "dv", then after choosing this operation, word1 = "bc" and merge = "dva".
If word2 is non-empty, append the first character in word2 to merge and delete it from word2.
For example, if word2 = "abc" and merge = "", then after choosing this operation, word2 = "bc" and merge = "a".
Return the lexicographically largest merge you can construct.

A string a is lexicographically larger than a string b (of the same length) if in the first position where a and b differ, a has a character strictly larger than the corresponding character in b. For example, "abcd" is lexicographically larger than "abcc" because the first position they differ is at the fourth character, and d is greater than c.

 

Example 1:

Input: word1 = "cabaa", word2 = "bcaaa"
Output: "cbcabaaaaa"
Explanation: One way to get the lexicographically largest merge is:
- Take from word1: merge = "c", word1 = "abaa", word2 = "bcaaa"
- Take from word2: merge = "cb", word1 = "abaa", word2 = "caaa"
- Take from word2: merge = "cbc", word1 = "abaa", word2 = "aaa"
- Take from word1: merge = "cbca", word1 = "baa", word2 = "aaa"
- Take from word1: merge = "cbcab", word1 = "aa", word2 = "aaa"
- Append the remaining 5 a's from word1 and word2 at the end of merge.
Example 2:

Input: word1 = "abcabc", word2 = "abdcaba"
Output: "abdcabcabcaba"
 

Constraints:

1 <= word1.length, word2.length <= 3000
word1 and word2 consist only of lowercase English letters.

solution:

you can't just compare char by char and take the larger one you have to also look into the future and get ready to take larger chars too

225
223

obvious you need to take 22 but from which string?
22
5
223
or
225
22
3

you wanna take some 2s and then get closer to 5 as soon as possible

another case:
994
993
in this case you can't just take the entire 994 and then take 993
you wanna take all the 9s first then take 4 and 3

use basic string comparison to compare the entire strings to determine which one to take 1 character from
and that's it.

time: O(m**2+n**2)
space: O(m+n + max of (m and n))
 */
var largestMerge = function(word1, word2) {
    if (!word1.length || !word2.length) return word1 || word2;
    return word1 > word2
        ? word1[0] + largestMerge(word1.slice(1), word2)
        : word2[0] + largestMerge(word1, word2.slice(1));
};
