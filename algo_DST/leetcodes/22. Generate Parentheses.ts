/**
 * @param {number} n
 * @return {string[]}
 base case left == right === n
    return [current input str]
 what to always return:
    array of [pattern, pattern, pattern,]
 what to do with return:
    combine them and return them
 how to make problem smaller:
    will make two recursive calls
        input str + '(' left++ if left < n
        input str + ')' right++ if right < n

 */
        var generateParenthesis = function(n, str = '', left = 0, right = 0, ans = []) {
            if (left === n && right === n) {
                ans.push(str);
                return ans;
            }
            left < n && generateParenthesis(n, str + '(', left + 1, right, ans);
            left > right && generateParenthesis(n, str + ')', left, right + 1, ans);
            return ans;
        };