/**
 * @param {string} digits
 * @return {string[]}
 */
const dToS = {
    1: [''],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: [''],
};

var letterCombinations = function(digits) {
    const ans = []
    if (!digits) return ans;
    const dfs = (idx, str) => {
        if (idx === digits.length) {
            ans.push(str);
            return;
        }
        const choices = dToS[digits[idx]];
        for (let choice of choices) {
            dfs(idx+1, str + choice);
        }
    }
    dfs(0, '');
    return ans;
};
