/**
 * You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. Each minute, you may take either the leftmost character of s, or the rightmost character of s.

Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.

 

Example 1:

Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.
Example 2:

Input: s = "a", k = 1
Output: -1
Explanation: It is not possible to take one 'b' or 'c' so return -1.
 

Constraints:

1 <= s.length <= 105
s consists of only the letters 'a', 'b', and 'c'.
0 <= k <= s.length


need to deal with 3 potential situations:
    xxxxxxxxxxxxxxxx
    ------
    shortest string containing k of chars is entirely on the left

    xxxxxxxxxxxxxxxx
               -----
    or is entirely on the right

    xxxxxxxxxxxxxxxx
    ----        ----
    is partially left and right

instead of looking at the covered area
look at the opposite of it, look at the left out area
that's the sliding window

so get a frequency count of all the characters
then do a sliding window to find the longest one
    which means we will get the shortest covered area containing all the needed chars

time: O(n)
space: O(1)
 */

var takeCharacters = function(s, k) {
    const freq = { a: 0, b: 0, c: 0 };
    for (let i = 0; i < s.length; i++) freq[s[i]]++;

    if (Math.min(freq.a, freq.b, freq.c) < k) return -1;

    let max = 0;

    let back = -1;
    for (let front = 0; front < s.length; front++) {
        freq[s[front]]--;
        while (Math.min(freq.a, freq.b, freq.c) < k) {
            freq[s[++back]]++;
        }
        max = Math.max(max, front - back);
    }

    return s.length - max;
};