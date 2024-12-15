/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

 */

function generateParenthesis(n: number): string[] {
    let pairs = ['()'];
    for (let i = 2; i <= n; i++) {
        const newPairs = [];
        for (let j = 0; j < pairs.length; j++) {
            const pair = pairs[j];
            let pCount = 0;
            for (let k = -1; k < pair.length; k++) {
                const char = pair[k];
                if (char === '(') {
                    pCount++;
                } else if (char === ')') {
                    pCount--
                }
                if (pCount === 0) {
                    newPairs.push(
                        '(' + pair.substr(0, k+1)  + ')' + pair.slice(k+1)
                    );
                }
            }
        }
        pairs = newPairs;
    }

    return pairs;
};
/**
1: ()
2: a: ()() b:(())
3: a: ()()(), (())(), (()())
   b: ()(()), ((()))

1: ()
loop through all previous pairs
    count opening and closings
        whenever count === 0, add ) there
 */
