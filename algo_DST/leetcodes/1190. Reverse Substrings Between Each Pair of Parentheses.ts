/**
 * You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
 

Constraints:

1 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It is guaranteed that all parentheses are balanced.

 */


/**
 * @param {string} s
 * @return {string}

(ed(et(oc))el)
      le etco ed
      leetcode

(abc(def(ghi)(jkl)mn)op(qr))

the easiest and naive way is to use a stack to keep track and flip things
    and keep track of even or odd indexes
        o base, so the chuck of the text is of even rank, reverse
            else remain the same
[ed, et, co]
  i evol u
  u i
  i u
 */
  var reverseParentheses = function(s) {
    let curChars = [];
    const stack = [curChars];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            curChars = [];
            stack.push(curChars);
        } else if (s[i] === ')') {
            curChars = curChars.reverse();
            stack.pop();
            if (stack.length) {
                stack[stack.length-1].push(...curChars);
            } else {
                stack.push(curChars);
            }
            curChars = stack[stack.length-1];
        } else {
            curChars.push(s[i]);
        }
    }
    return stack[0].join('');
};