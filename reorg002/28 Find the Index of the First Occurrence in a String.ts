/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

the most straight forward solution would be moving char by chat on the haystack
    then whenever find a char === needle[0]
        do a char by char comprision

time: O(haystack.length * needle.length)
space: O(1)
 */

function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        const hChar = haystack[i];
        if (hChar === needle[0]) {
            let j = 0;
            while (needle[j] && needle[j] === haystack[i+j]) j++;
            if (j === needle.length) return i;
        }
    }
    return -1;
};
