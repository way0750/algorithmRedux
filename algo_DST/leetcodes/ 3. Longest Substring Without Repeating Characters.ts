/**
 * Given a string s, find the length of the longest 
substring
 without duplicate characters.

 

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

solution:
using slide window while keep track of each char's existance by using a set
so loop from left to right
let back pointer be at -1
    which index it is pointing at, it is already excluded
check if current char is already in the set
if not, add to set
if yes, then move back pointer forward, removing the char it runs into, from the set, until the front pointer's char is on longer in the set
calculate the distance and update the current max length
return max length at then end

time: O(n)
space: O(n)


solution two:
similar to the above but maintain record of char: most-recentl-index
this way, when you found a repeating char
    just JUMP the back pointer straight to the most recently index of that char, and done, no need to loop the back all the way there
    but of course you only jump if the char's most recent index is > than back
        otherwise you are getting a much larger and wrong distance
same time and space like above
 */

var lengthOfLongestSubstring021625 = function(s) {
    let max = 0;
    const mostRecentIndexes = {};
    let back = -1;
    for (let front = 0; front < s.length; front++) {
        const char = s[front];
        if (mostRecentIndexes.hasOwnProperty(char)) {
            back = Math.max(back, mostRecentIndexes[char]);
        }
        max = Math.max(max, front - back);
        mostRecentIndexes[char] = front;
    }
    return max;
};